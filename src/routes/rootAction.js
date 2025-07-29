import { createContact } from "../contacts";
import { redirect } from "react-router-dom";

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
