const {
  handlerTambahBuku,
  ambilSemuaBuku,
  ambilSpesifik,
  edit,
  hapus,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/buku',
    handler: handlerTambahBuku,
  },
  {
    method: 'GET',
    path: '/buku',
    handler: ambilSemuaBuku,
  },
  {
    method: 'GET',
    path: '/buku/{id}',
    handler: ambilSpesifik,
  },
  {
    method: 'PUT',
    path: '/buku/{id}',
    handler: edit,
  },
  {
    method: 'DELETE',
    path: '/buku/{id}',
    handler: hapus,
  },
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return { message: 'CORS enabled!' };
    }
  }
];

module.exports = routes;
