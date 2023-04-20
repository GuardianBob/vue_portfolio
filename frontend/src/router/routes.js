
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/test_posts', component: () => import('pages/TestPosts.vue') },
      { path: '/posts', component: () => import('pages/ListPosts.vue') },
      { path: '/post_template/:id?', component: () => import('pages/PostTemplate.vue') },
      { path: '/post_template2/:id?', component: () => import('pages/PostTemplate2.vue') },
      { path: '/coding', component: () => import('pages/ListPosts.vue') },
      { path: '/workshop', component: () => import('pages/ListPosts.vue') },
      { path: '/post/:id?', component: () => import('pages/Post.vue') },
      { path: '/contact', component: () => import('pages/ContactPage.vue') },
    ]
  },
  {
    path: '/portfolio',
    component: () => import('layouts/PortfolioLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CodePortfolio.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
