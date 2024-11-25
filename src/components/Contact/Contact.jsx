import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import toast, { Toaster } from "react-hot-toast";
import css from "./Contact.module.css";

export default function Contact({ item }) {
  const dispatch = useDispatch();
  return (
    <div className={css.contactItem}>
      <div className={css.info}>
        <p>
          <FaUser className={css.icon} />
          {item.name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {item.number}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          dispatch(deleteContact(item.id))
            .unwrap()
            .then(() => {
              toast.error("Contact deleted!");
            })
            .catch((err) => {
              toast.error(`${err.message}`);
            });
        }}
      >
        Delete
      </button>
      <Toaster />
    </div>
  );
}
