export class Developer{
  constructor(){}

  rank: number | undefined
  username : string | undefined
  name : string | undefined
  url : string | undefined
  avatar : string | undefined
  popularRepository :{
    repositoryName : string
    url : string
    description : string
  } | undefined
}
