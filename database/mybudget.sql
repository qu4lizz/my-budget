-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler version: 1.1.3
-- PostgreSQL version: 16.0
-- Project Site: pgmodeler.io
-- Model Author: ---

-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.
-- 
-- object: mybudget | type: DATABASE --

-- object: public.transaction | type: TABLE --
-- DROP TABLE IF EXISTS public.transaction CASCADE;
CREATE TABLE public.transaction (
	id serial NOT NULL,
	description text NOT NULL,
	amount decimal NOT NULL,
	currency varchar(15) NOT NULL,
	id_account integer NOT NULL,
	CONSTRAINT transaction_pk PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE public.transaction OWNER TO postgres;
-- ddl-end --

-- object: public.account | type: TABLE --
-- DROP TABLE IF EXISTS public.account CASCADE;
CREATE TABLE public.account (
	id serial NOT NULL,
	name varchar(40) NOT NULL,
	balance decimal NOT NULL,
	currency varchar(15) NOT NULL,
	CONSTRAINT account_pk PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE public.account OWNER TO postgres;
-- ddl-end --

-- object: account_fk | type: CONSTRAINT --
-- ALTER TABLE public.transaction DROP CONSTRAINT IF EXISTS account_fk CASCADE;
ALTER TABLE public.transaction ADD CONSTRAINT account_fk FOREIGN KEY (id_account)
REFERENCES public.account (id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --


