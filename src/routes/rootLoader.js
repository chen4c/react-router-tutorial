import { getContacts } from "../contacts";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  console.log('q:', q);
  const contacts = await getContacts(q);
  return { contacts };
}
