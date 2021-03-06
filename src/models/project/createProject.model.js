const fb = require('firebase');
const db = fb.database();
const hash = require('../../modules/hash');
// schema
const projectSchema = require('../../schemas/project.schema');

// imgur upload service
const uploadImg = require('../../services/imgur_api');

module.exports = async (token, { username, name, description, cover, link, git, color }) => {
  const id = hash();

  const coverLink = await uploadImg(cover);

  return db.ref(`/projects/${username}/${id}`)
    .set(projectSchema(
      token,
      id,
      username,
      name,
      description,
      coverLink ? coverLink : 'https://www.faiauto.com/content/uploads/2016/02/placeholder-banner.png',
      link,
      git,
      color
    ))
    .then(() => true)
    .catch(() => false);
}