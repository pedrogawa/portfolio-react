export default interface IRepository {
  full_name: string;
  description: string;
  svn_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
