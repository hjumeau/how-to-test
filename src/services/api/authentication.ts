interface Customer {
  id: number;
  email: string;
}

export function login(username: string, password: string): Promise<Customer> {
  return new Promise((resolve, reject) => {
    const result = username === 'test-trophy' && password === 'test'
      ? () => resolve({id: 1, email: 'test@gmail.com'})
      : reject;
    setTimeout(result, 3000);
  });
}
