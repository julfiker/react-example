import { Schema, arrayOf, normalize } from 'normalizr';
import merge from 'lodash.merge';
import { camelizeKeys } from 'humps';

// Github API provides Link header for pagination. Extract next page url
// from it
function getNextPageUrl(res) {
  const link = res.headers.get('Link');
  if (!link) {
    return null;
  }

  const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1);
  if (!nextLink) {
    return null;
  }

  return nextLink.split(';')[0].slice(1, -1);
}

// Provides function for normalizing redux-api-middleware responsens according
// to given schema
export const normalizr = function(schema) {
  return (action, state, res) => {
    const contentType = res.headers.get('Content-Type');

    if (contentType && ~contentType.indexOf('json')) {
      return res.json().then((json) => merge({nextPageUrl: getNextPageUrl(res)},
        normalize(camelizeKeys(json), schema)
      ));
    }
  };
};

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

const userSchema = new Schema('users', {
  idAttribute: 'login'
});

const repoSchema = new Schema('repos', {
  idAttribute: 'fullName'
});

repoSchema.define({
  owner: userSchema
});

// Schemas for Github API responses.
export const Schemas = {
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
  REPO: repoSchema,
  REPO_ARRAY: arrayOf(repoSchema)
};
