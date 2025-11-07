import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { sns } from '@/config/sns';

export const Profile = () => (
  <div className="select-none vstack items-center gap-5 p-6 bg-primary-1">
    <div className="vstack items-center gap-2">
      <Image
        className="object-cover w-28 h-28 rounded-full"
        alt="avatar"
        src="/assets/author.png"
      />
      <h1 className="text-2xl font-semibold text-primary-1">ZAGARO</h1>
    </div>

    <p className="text-primary-1">
      ZAGARO（ザガロ）は、静岡県立大学の学生を中心としたテック・エンジニアリングサークルです。
      エンジニアリングやAI・Web開発に関心のある学生が集まり、学び・交流・発信を通じて互いに成長することを目指しています。
    </p>

    <div className="flex gap-4">
      {sns.map(({ href, icon, label }) => (
        <Link key={href} href={href} passHref>
          <a className="text-primary-1" aria-label={label}>
            {icon}
          </a>
        </Link>
      ))}
    </div>
  </div>
);
