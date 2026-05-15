import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  layout("routes/public/authLayout.tsx", [
    layout("components/PublicRoute.tsx", [
      route("sign-in", "routes/public/sign-in-wrapper.tsx"),
      route("sign-up", "routes/public/sign-up-wrapper.tsx"),
         route("signup", "routes/signup/page.tsx"),  
    ]),
  ]),

  route("admin", "admin/layout.tsx", [
    layout("routes/protected/ProtectedLayout.tsx", [
      route("dashboard", "routes/protected/dashboard-wrapper.tsx"),
      route("admissions", "features/admissions/index.tsx"),

      // ✅ courses
      ...createCrudRoutes("courses"),
      ...createCrudRoutes("blogs"),
      ...createCrudRoutes("testimonials"),
     ...createCrudRoutes("app-config"),
      ...createCrudRoutes("cta"),
      ...createCrudRoutes("policy"),
    ]),
  ]),
] satisfies RouteConfig;
function createCrudRoutes(entity: string): ReturnType<typeof route>[] {
  const basePath = `features/${entity}`;

  return [
    route(entity, `${basePath}/index.tsx`, { id: `${entity}-index` }),

    route(
      `${entity}/create`,
      `${basePath}/create-wrapper.tsx`,
      { id: `${entity}-create` }
    ),

    route(
      `${entity}/create/:type`,
      `${basePath}/create-wrapper.tsx`,
      { id: `${entity}-create-type` }
    ),

    route(
      `${entity}/edit/:id`,
      `${basePath}/edit-wrapper.tsx`,
      { id: `${entity}-edit` }
    ),
  ];
}

// function createCrudRoutes(entity: string): ReturnType<typeof route>[] {
//   const basePath = `features/${entity}`;

//   return [
//     route(entity, `${basePath}/index.tsx`),

//     route(`${entity}/create`, `${basePath}/create-wrapper.tsx`),

//     route(`${entity}/edit/:id`, `${basePath}/edit-wrapper.tsx`),
//      route(`${entity}/create/:type`, `${basePath}/create-wrapper.tsx`),
     

//     // 🔥 ADD THIS LINE (IMPORTANT FIX)
   
//   ];
// }

// function createCrudRoutes(entity: string): ReturnType<typeof route>[] {
//   const basePath = `features/${entity}`; // ✅ FIXED

//   return [
//     route(entity, `${basePath}/index.tsx`),
//     route(`${entity}/create`, `${basePath}/create-wrapper.tsx`),
//     route(`${entity}/edit/:id`, `${basePath}/edit-wrapper.tsx`),
//   ];
// }
