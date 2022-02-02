import {gql , useQuery} from '@apollo/client'

export const GET_LAUNCHES = gql`
  query GetLaunchesPast($limit: Int!) {
  launchesPast(limit: $limit) {
    mission_name
    links {
      mission_patch
    }
    details
    id
  }
}


`
