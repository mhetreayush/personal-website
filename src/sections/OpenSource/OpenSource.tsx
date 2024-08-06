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
  {
    owner: 'calcom',
    repo: 'cal.com',
    pull_number: 15691,
    note: (
      <>
        This PR was opened by another contributor based on my PR{' '}
        <a
          target="_blank"
          href="https://github.com/calcom/cal.com/pull/15592"
          className="inline-block text-blue-500 underline underline-offset-2 w-fit font-semibold"
        >
          #15592
        </a>
      </>
    ),
  },
];

export const OpenSource = async () => {
  const octokit = new Octokit({
    auth: TOKEN,
  });

  const fetchPRStats = async ({
    owner,
    repo,
    pull_number,
    note,
  }: {
    owner: string;
    repo: string;
    pull_number: number;
    note?: React.ReactNode;
  }) => {
    try {
      const response = await octokit.request(`GET /repos/${owner}/${repo}/pulls/${pull_number}`);
      if (note) {
        response.data.note = note;
      }
      return response;
    } catch (error) {
      return [];
    }
  };

  const prStats = await Promise.all(MERGED_PRS.map(fetchPRStats));

  return (
    <Section title="Open Source Contributions" intersectionObserverTitle="Experience">
      <div className="flex flex-col md:grid grid-cols-2 gap-4">
        {prStats.map((pr: any, idx: number) => (
          <GithubPRCard
            key={idx}
            merged={pr.data.merged}
            title={pr.data.title}
            url={`https://github.com/${pr.data.base.repo.full_name}/pull/${pr.data.number}`}
            userAvatarURL={pr.data.user.avatar_url}
            username={pr.data.user.login}
            repository={pr.data.base.repo.full_name}
            prNumber={pr.data.number}
            mergedAt={pr.data.merged_at}
            note={pr.data.note}
          />
        ))}
      </div>
    </Section>
  );
};
