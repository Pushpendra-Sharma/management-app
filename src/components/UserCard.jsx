import React from 'react';
import Avatar from '@atlaskit/avatar';
import Lozenge from '@atlaskit/lozenge';
import '../styles/user.css';

const UserCard = ({ data }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    birthDate,
    image,
    address,
    company,
  } = data;

  const fullAddress = `${address.address}, ${address.city}, ${address.state} ${address.postalCode}`;

  return (
    <div className='user-card'>
      <div className='user-card-image'>
        <Avatar src={image} name={`${firstName} ${lastName}`} size='xlarge' />
      </div>
      <div className='user-card-info'>
        <h2 className='user-card-name'>{`${firstName} ${lastName}`}</h2>
        <p className='user-card-email'>Email: {email}</p>
        <p className='user-card-phone'>Phone: {phone}</p>
        <p className='user-card-birthdate'>{`Born: ${birthDate}`}</p>
        <p className='user-card-address'>Address: {fullAddress}</p>
        <p className='user-card-company'>Company: {company.name}</p>
        <Lozenge appearance='success'>Title: {company.title}</Lozenge>
      </div>
    </div>
  );
};

export default UserCard;
