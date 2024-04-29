"use server";

import { createClient } from "@/lib/supabase/server";
const supabase = createClient();

export const getData = async (table: string, call: string) => {
	const { data } = await supabase.from(table).select(call);
	return data || undefined;
};
