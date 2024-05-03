export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	public: {
		Tables: {
			blogs: {
				Row: {
					content: string | null;
					created_at: string;
					id: string;
					name: string;
					project_id: string | null;
					tags: string[] | null;
					updated_at: string | null;
				};
				Insert: {
					content?: string | null;
					created_at?: string;
					id?: string;
					name: string;
					project_id?: string | null;
					tags?: string[] | null;
					updated_at?: string | null;
				};
				Update: {
					content?: string | null;
					created_at?: string;
					id?: string;
					name?: string;
					project_id?: string | null;
					tags?: string[] | null;
					updated_at?: string | null;
				};
				Relationships: [];
			};
			profiles: {
				Row: {
					admin: boolean;
					avatar_url: string | null;
					background_image_url: string | null;
					bio: string | null;
					class: number | null;
					full_name: string | null;
					id: string;
					slug: string;
					tags: string[] | null;
					updated_at: string | null;
					websites: string[] | null;
				};
				Insert: {
					admin?: boolean;
					avatar_url?: string | null;
					background_image_url?: string | null;
					bio?: string | null;
					class?: number | null;
					full_name?: string | null;
					id?: string;
					slug: string;
					tags?: string[] | null;
					updated_at?: string | null;
					websites?: string[] | null;
				};
				Update: {
					admin?: boolean;
					avatar_url?: string | null;
					background_image_url?: string | null;
					bio?: string | null;
					class?: number | null;
					full_name?: string | null;
					id?: string;
					slug?: string;
					tags?: string[] | null;
					updated_at?: string | null;
					websites?: string[] | null;
				};
				Relationships: [];
			};
			profiles_blogs: {
				Row: {
					blog_id: string;
					profile_id: string;
				};
				Insert: {
					blog_id: string;
					profile_id: string;
				};
				Update: {
					blog_id?: string;
					profile_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "profiles_blogs_blog_id_fkey";
						columns: ["blog_id"];
						isOneToOne: false;
						referencedRelation: "blogs";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "profiles_blogs_profile_id_fkey";
						columns: ["profile_id"];
						isOneToOne: false;
						referencedRelation: "profiles";
						referencedColumns: ["id"];
					},
				];
			};
			profiles_projects: {
				Row: {
					profile_id: string;
					projects: string;
				};
				Insert: {
					profile_id: string;
					projects: string;
				};
				Update: {
					profile_id?: string;
					projects?: string;
				};
				Relationships: [
					{
						foreignKeyName: "profiles_projects_profile_id_fkey";
						columns: ["profile_id"];
						isOneToOne: false;
						referencedRelation: "profiles";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "profiles_projects_projects_fkey";
						columns: ["projects"];
						isOneToOne: false;
						referencedRelation: "projects";
						referencedColumns: ["id"];
					},
				];
			};
			projects: {
				Row: {
					content: string | null;
					created_at: string;
					id: string;
					image: string | null;
					infographic_urls: string[] | null;
					name: string;
					prizes: string[] | null;
					slug: string;
					summary: string | null;
					tags: string[] | null;
					videos: Json[] | null;
					year: number;
				};
				Insert: {
					content?: string | null;
					created_at?: string;
					id?: string;
					image?: string | null;
					infographic_urls?: string[] | null;
					name: string;
					prizes?: string[] | null;
					slug: string;
					summary?: string | null;
					tags?: string[] | null;
					videos?: Json[] | null;
					year?: number;
				};
				Update: {
					content?: string | null;
					created_at?: string;
					id?: string;
					image?: string | null;
					infographic_urls?: string[] | null;
					name?: string;
					prizes?: string[] | null;
					slug?: string;
					summary?: string | null;
					tags?: string[] | null;
					videos?: Json[] | null;
					year?: number;
				};
				Relationships: [];
			};
			website: {
				Row: {
					content: Json | null;
					name: string;
				};
				Insert: {
					content?: Json | null;
					name: string;
				};
				Update: {
					content?: Json | null;
					name?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema["Tables"] & PublicSchema["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
				PublicSchema["Views"])
		? (PublicSchema["Tables"] &
				PublicSchema["Views"])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof PublicSchema["Enums"]
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
		? PublicSchema["Enums"][PublicEnumNameOrOptions]
		: never;
