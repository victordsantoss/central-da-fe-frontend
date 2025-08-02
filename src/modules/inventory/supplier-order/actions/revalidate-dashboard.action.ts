'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateSupplierOrderDashboard() {
  revalidateTag('supplier-order-dashboard');
}
