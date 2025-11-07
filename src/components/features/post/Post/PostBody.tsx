type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => {
  return (
    <div className="post">
      <div className="znc" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
