import { Octokit } from "octokit";

const TOKEN = process.env.GITHUB_ACCESS_TOKEN ?? "";

export const useFetchGithubPRStats = () => {

    const octokit = new Octokit({
        auth: TOKEN
    });

    const fetchPRStats = async () => {
        try {
            const response = await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
                owner: 'calcom',
                repo: 'cal.com',
                pull_number: 14910
            });
            return response;
        } catch (error) {
            return [];
        }
    }

    return { fetchPRStats };
}