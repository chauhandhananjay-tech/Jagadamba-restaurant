export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  party_size: number;
  reservation_date: string;
  reservation_time: string;
  occasion: string | null;
  special_requests: string | null;
  status: string;
  created_at: string;
}

export interface NewReservation {
  name: string;
  email: string;
  phone: string;
  party_size: number;
  reservation_date: string;
  reservation_time: string;
  occasion?: string;
  special_requests?: string;
}

export interface NewReview {
  name: string;
  rating: number;
  comment: string;
}
