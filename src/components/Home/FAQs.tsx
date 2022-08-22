import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FAQItem, faqs } from "../../data/faqs";

export default function FAQs() {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  const handleOpen = (id: number) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  function renderItem(faqs: FAQItem) {
    if (Array.isArray(faqs.body)) {
      const listType = `${faqs.type === "ol" ? "list-decimal" : "list-disc"}`;
      return faqs.body.map((item) => <li className={listType + ""}>{item}</li>);
    }
    if (faqs.type === "text") {
      return <p>{faqs.body}</p>;
    }
  }

  return (
    <div className="text-center px-32 pt-16 " id="FAQS">
      <h1 className="text-3xl font-bold pb-10">FAQS</h1>
      <div>
        <Fragment>
          {faqs.map((item) => (
            <Accordion
              open={selectedItem === item.id}
              onClick={() => handleOpen(item.id)}
            >
              <AccordionHeader className=" border-gray-300 border-b-2">
                {item.title}
              </AccordionHeader>
              <AccordionBody className="list-decimal text-start text-lg text-black  border-b-2 border-gray-300 pb-10">
                {renderItem(item)}
              </AccordionBody>
            </Accordion>
          ))}
        </Fragment>
      </div>
    </div>
  );
}
