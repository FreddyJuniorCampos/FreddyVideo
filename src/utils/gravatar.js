import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https:gravatar.com/avatar/';
  const formmatedEmail = (email).trim().toLowerCase();
  const hash = md5(formmatedEmail, { encoding: 'binary'});
  return `${base}${hash}`;
}

export default gravatar;