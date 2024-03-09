import React from "react";
import { BooksServiceConsumer } from "../books-service-context";

const withBooksService = () => (Wrapped) => {

    return (props) => {
        return (
            <BooksServiceConsumer>
                {
                    (bookstoreService) => {
                        return (<Wrapped {...props}
                            bookstoreService={bookstoreService} />);
                    }
                }
            </BooksServiceConsumer>

        );
    }
};

export default withBooksService;