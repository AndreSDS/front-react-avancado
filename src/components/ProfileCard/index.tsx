import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { AuthorsProps, SocialLinksProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  // twitter: <FaTwitter />,
  // github: <GrGithub />,
  // dribbble: <FaDribbble />
  0: <FaTwitter />,
  1: <GrGithub />,
  2: <FaDribbble />
}

const ProfileCard: React.FC<AuthorsProps> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image
      src={getImageUrl(photo[0].url)}
      loading="lazy"
      alt={photo.alternativeText}
    />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item, index) => (
        <S.Link key={item.url}>
          <a href={item.url}>{icons[index]}</a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
