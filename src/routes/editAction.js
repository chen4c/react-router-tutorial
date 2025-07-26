import { redirect } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const update = Object.fromEntries(formData);
  await updateContact(params.contactId, update);
  return redirect(`/contacts/${params.contactId}`);
}