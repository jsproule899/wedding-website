-- Table: public.rsvps

-- DROP TABLE IF EXISTS public.rsvps;

CREATE TABLE IF NOT EXISTS public.rsvps
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    guest_name text COLLATE pg_catalog."default" NOT NULL,
    attendance text COLLATE pg_catalog."default" NOT NULL,
    main_choice text COLLATE pg_catalog."default" NOT NULL,
    dessert_choice text COLLATE pg_catalog."default",
    dietary_restrictions text COLLATE pg_catalog."default",
    song_request text COLLATE pg_catalog."default",
    plus_one text COLLATE pg_catalog."default",
    CONSTRAINT rsvps_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.rsvps
    OWNER to postgres;