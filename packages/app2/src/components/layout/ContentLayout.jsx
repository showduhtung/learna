import { Helmet } from 'components/helmet';

export const ContentLayout = ({ children, title }) => {
  return (
    <>
      <Helmet title={title} />
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};
