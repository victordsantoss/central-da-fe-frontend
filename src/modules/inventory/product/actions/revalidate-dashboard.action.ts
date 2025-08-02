'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateProductsDashboard() {
  revalidateTag('product-dashboard');
}
