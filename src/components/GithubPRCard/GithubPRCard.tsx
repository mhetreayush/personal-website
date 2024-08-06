import Link from 'next/link';
import { AnimatedButton } from '../AnimatedButton';
import { useFormatDate } from '@/hooks/useFormatDate';

export const GithubPRCard = ({
  merged,
  title,
  url,
  userAvatarURL,
  username,
  repository,
  prNumber,
  mergedAt,
  note,
}: {
  merged: string;
  title: string;
  url: string;
  userAvatarURL: string;
  username: string;
  repository: string;
  prNumber: number;
  mergedAt: string;
  note?: React.ReactNode;
}) => {
  const { formattedDate } = useFormatDate(mergedAt);
  return (
    <Link href={url} target="_blank">
      <AnimatedButton
        rounded="rounded-md"
        className={{
          body: 'h-full',
          child: 'bg-white h-full',
        }}
      >
        <div className="flex flex-col gap-8 p-4 rounded-md justify-between min-h-full">
          <div className="flex justify-between w-full gap-4 md:gap-20">
            <div className="flex flex-col gap-2 grow">
              <p className="text-sm text-gray-500">{repository}</p>
              <p className="text-2xl">
                <span className="text-gray-500 font-light">#{prNumber} </span>
                <span className="font-bold">{title}</span>
              </p>
              {!!note && (
                <>
                  <p className="text-sm text-gray-400">{note}</p>
                </>
              )}
            </div>
            <img
              src={userAvatarURL}
              alt={username}
              width={80}
              height={80}
              className="rounded-full md:min-h-[80px] md:min-w-[80px] md:h-[80px] md:w-[80px] min-h-[60px] min-w-[60px] h-[60px] w-[60px]"
            />
          </div>
          <div className="flex gap-1 items-center  text-gray-500 text-sm">
            <img
              src={userAvatarURL}
              alt={username}
              width={20}
              height={20}
              className="rounded-full min-h-[20px] min-w-[20px] h-[20px] w-[20px]"
            />
            <p className="text-base font-semibold text-black -mt-[2px]">{username}</p>
            <p>•</p>
            <p>{formattedDate}</p>
          </div>
        </div>
      </AnimatedButton>
    </Link>
  );
};
