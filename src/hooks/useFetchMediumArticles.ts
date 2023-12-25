"use client";
import { useEffect, useState } from "react";
import { parse } from "rss-to-json";

const MEDIUM_ACCESS_TOKEN = process.env.MEDIUM_ACCESS_TOKEN ?? "";

const errorLogger = (source: string, error: any) => {
  console.error(`Error in ${source}:`, error);
};

type ArticleType = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
};

type APIState =
  | {
      status: "idle" | "loading" | "success";
    }
  | {
      status: "error";
      // Since I am not using Axios or any other library, I am not sure what the error object looks like.
      // If it were Axios, I would have used AxiosError type.
      errorData: any;
    };

const headers = {
  Authorization: `Bearer ${MEDIUM_ACCESS_TOKEN}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};

const fetchMyMediumID = async (): Promise<string> => {
  try {
    const response = await fetch(`https://api.medium.com/v1/me`, {
      headers,
    });
    const { data } = await response.json();
    return data?.username ?? "";
  } catch (error) {
    errorLogger("fetchMyMediumID", error);
    return "";
  }
};

const fetchMyStoriesUsingUsername = async (username: string): Promise<any> => {
  try {
    const articles = await parse(`https://medium.com/feed/@${username}`);
    const articlesData = articles.items[0];
    return articlesData;
  } catch (error) {
    errorLogger("fetchMyStoriesUsingUsername", error);
    return [];
  }
};

const useFetchMediumArticles = () => {
  const [apiState, setApiState] = useState<APIState>({ status: "idle" });
  const [articles, setArticles] = useState<ArticleType[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setApiState({ status: "loading" });
        const username = await fetchMyMediumID();
        const articles = await fetchMyStoriesUsingUsername(username);
        setArticles(articles);
        setApiState({ status: "success" });
      } catch (error) {
        errorLogger("useFetchMediumArticles", error);
        setArticles([]);
        setApiState({ status: "error", errorData: error });
      }
    };

    fetchData();
  }, []);

  return { apiState, articles };
};

export { useFetchMediumArticles };
