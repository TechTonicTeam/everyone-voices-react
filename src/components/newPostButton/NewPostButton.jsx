import React, {useState} from 'react';
import styles from './NewPostButton.module.css'
import NewPostModal from "../newPostModal/NewPostModal";
const NewPostButton = ({setPost}) => {
    const [activeModal, setActiveModal] = useState(false)
    return (
        <div>
            <div
                className={styles.newPostButton}
                onClick={() => setActiveModal(true)}
            >

            </div>
            <NewPostModal
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                setPost={setPost}
            />
        </div>
    );
};

export default NewPostButton;