import { GithubPRCard } from '@/components/GithubPRCard/GithubPRCard';
import { Section } from '@/components/Section';
import { Octokit } from 'octokit';
const TOKEN = process.env.GITHUB_ACCESS_TOKEN ?? '';
const MERGED_PRS = [
  {
    owner: 'calcom',
    repo: 'cal.com',
    pull_number: 14910,
  },
];

export const OpenSource = async () => {
  const octokit = new Octokit({
    auth: TOKEN,
  });

  const fetchPRStats = async ({ owner, repo, pull_number }: { owner: string; repo: string; pull_number: number }) => {
    try {
      const response = await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
        owner: 'calcom',
        repo: 'cal.com',
        pull_number: 14910,
      });
      return response;
    } catch (error) {
      return [];
    }
  };

  const prStats = await Promise.all(MERGED_PRS.map(fetchPRStats));

  return (
    <Section title="Open Source Contributions" intersectionObserverTitle="Experience">
      <div className="flex flex-col md:grid grid-cols-2 gap-4">
        {prStats.map((pr, idx) => (
          <GithubPRCard
            merged={pr.data.merged}
            title={pr.data.title}
            url={`https://github.com/${pr.data.base.repo.full_name}/pull/${pr.data.number}`}
            userAvatarURL={pr.data.user.avatar_url}
            username={pr.data.user.login}
            repository={pr.data.base.repo.full_name}
            prNumber={pr.data.number}
            mergedAt={pr.data.merged_at}
          />
        ))}
      </div>
    </Section>
  );
};
