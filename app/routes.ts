import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("visit-us", "routes/visit-us.tsx"),
  route("volunteer", "routes/volunteer.tsx"),
  route("catering", "routes/catering.tsx"),
  route("donate", "routes/donate.tsx"),
  route("donate/success", "routes/donate.success.tsx"),
  route("donate/cancel", "routes/donate.cancel.tsx"),
  route("stories", "routes/stories.tsx"),
  route("stories/:slug", "routes/stories.$slug.tsx"),
  route("api/stripe/webhook", "routes/api.stripe.webhook.tsx"),
] satisfies RouteConfig;
