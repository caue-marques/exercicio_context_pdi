import { Header, Segment } from "semantic-ui-react";
import { ContactContextProvider } from "../../context/Contact";
import { useThemeCtx } from "../../context/Theme";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import './contact.css'

export default function Contacts() {

  const { theme } = useThemeCtx();

  return (
    <div className={`${theme} containerCRUD`}>
        <ContactContextProvider>
          <Segment basic className={`${theme} contentCRUD`}>
            <Header as="h3" className={"text-white"}>Contacts</Header>
            <ContactForm />
            <ContactTable />
          </Segment>
        </ContactContextProvider>
    </div>
  );
}