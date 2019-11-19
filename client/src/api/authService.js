import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

// export const signup = async payload => {
//     const data = await service.post('/auth/signup', payload)
//     return data
// }

export const signup = user => {
  service
    .post('/auth/signup', user)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

// export const login = async user => {
//   try {
//     const { data } = await service.post('/auth/login', user);
//     return data;
//   } catch {
//     return null;
//   }
// };

export const login = async user => {
    const  { data }  = await service.post('/auth/login', user);
    return data;
};

export const logout = async () => {
  const data = await service.get('/auth/logout');
  console.log('data', data.data.message);
  return data;
};

export const loggedin = async () => {
  const data = await service.get('/auth/loggedin');
  console.log(data.data.user, 'data loggedin');
  return data.data.user;
};

// export const loggedin = () => {
//     return service.get('/auth/loggedin')

//     // .then(response => response.data )
//     .then(res => {
//         console.log(res.data,"from loggedin auth")
//         return res.data

//     })
//   }
