import { useEffect, useState } from 'react';
import Bookitem from './bookitem';
import classes from './book.module.css';
import Card from '../UI/card';

const AvailBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      // Hardcoded data for books
      const loadedBooks = [
        {
          id: 'b1',
          name: 'To Kill a Mockingbird',
          description: 'A novel by Harper Lee',
          price: 10.99,
        },
        {
          id: 'b2',
          name: '1984',
          description: 'A novel by George Orwell',
          price: 8.99,
        },
        {
          id: 'b3',
          name: 'The Great Gatsby',
          description: 'A novel by F. Scott Fitzgerald',
          price: 12.99,
        },
        {
          id: 'b4',
          name: 'Moby Dick',
          description: 'A novel by Herman Melville',
          price: 11.99,
        },
      ];

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setBooks(loadedBooks);
      setIsLoading(false);
    };

    fetchBooks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.bookLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.bookError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const bookList = books.map((book) => (
    <Bookitem
      key={book.id}
      id={book.id}
      name={book.name}
      description={book.description}
      price={book.price}
    />
  ));

  return (
    <section className={classes.book}>
      <Card>
        <ul>{bookList}</ul>
      </Card>
    </section>
  );
};

export default AvailBooks;
