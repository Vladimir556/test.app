import {gql , useQuery} from '@apollo/client'

export const GET_LAUNCHES = gql`
  query GetLaunchesPast {
  launchesPast(limit: 10) {
    mission_name
    links {
      mission_patch
    }
    details
    id
  }
}


`
