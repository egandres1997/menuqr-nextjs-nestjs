declare namespace Express {
  interface Request {
    user: {
      tenant_id: string;
    };
  }
}
