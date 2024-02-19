export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      authenticity_levels: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          authenticty_level_id: number
          brand_id: number
          color_id: number | null
          created_at: string
          description: string | null
          gender: Database["public"]["Enums"]["gender"]
          id: number
          images: string[] | null
          name: string
          price: number
          reference: string | null
        }
        Insert: {
          authenticty_level_id: number
          brand_id: number
          color_id?: number | null
          created_at?: string
          description?: string | null
          gender: Database["public"]["Enums"]["gender"]
          id?: number
          images?: string[] | null
          name?: string
          price: number
          reference?: string | null
        }
        Update: {
          authenticty_level_id?: number
          brand_id?: number
          color_id?: number | null
          created_at?: string
          description?: string | null
          gender?: Database["public"]["Enums"]["gender"]
          id?: number
          images?: string[] | null
          name?: string
          price?: number
          reference?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_authenticty_level_id_fkey"
            columns: ["authenticty_level_id"]
            isOneToOne: false
            referencedRelation: "authenticity_levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "watch_brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_products_color_id_fkey"
            columns: ["color_id"]
            isOneToOne: false
            referencedRelation: "watch_colors"
            referencedColumns: ["id"]
          }
        ]
      }
      watch_brands: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      watch_colors: {
        Row: {
          created_at: string
          id: number
          name: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          value?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          value?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_product: {
        Args: {
          param_product_id: number
        }
        Returns: {
          id: number
          name: string
          description: string
          reference: string
          price: number
          gender: string
          brand: string
          authenticity_level: string
          image_url: string
        }[]
      }
      get_products: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          name: string
          description: string
          reference: string
          price: number
          gender: string
          brand: string
          authenticity_level: string
          image_url: string
        }[]
      }
    }
    Enums: {
      gender: "male" | "female"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
