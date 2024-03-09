import React from "react";
import { BooksServiceConsumer } from "../books-service-context";

const withBooksService = () => (Wrapped) => {

    return (props) => {
        return (
            <BooksServiceConsumer>
                {
                    (booksService) => {
                        return (<Wrapped {...props}
                            booksService={booksService} />);
                    }
                }
            </BooksServiceConsumer>

        );
    }
};

export default withBooksService;