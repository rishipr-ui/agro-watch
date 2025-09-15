-- Add farm fields to profiles table
ALTER TABLE public.profiles 
ADD COLUMN farm_area TEXT,
ADD COLUMN farm_location TEXT,
ADD COLUMN budget TEXT,
ADD COLUMN animal_type TEXT;