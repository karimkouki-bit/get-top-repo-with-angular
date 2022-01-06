export class Repository{
  constructor(){}
  rank: number | undefined
  repositoryName : string | undefined
  url : string | undefined
  description : string | undefined
  language : string | undefined
  totalStars: number | undefined
  forks: number | undefined
  builtBy:{
    username:string
    url : string
    avatar : string
  }[] | undefined
}
