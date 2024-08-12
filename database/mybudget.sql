CREATE TABLE public.transaction (
	id serial NOT NULL,
	description text NOT NULL,
	amount decimal NOT NULL,
	currency varchar(15) NOT NULL,
	id_account integer NOT NULL,
	CONSTRAINT transaction_pk PRIMARY KEY (id)
);

ALTER TABLE public.transaction OWNER TO postgres;

CREATE TABLE public.account (
	id serial NOT NULL,
	name varchar(40) NOT NULL,
	balance decimal NOT NULL,
	currency varchar(15) NOT NULL,
	CONSTRAINT account_pk PRIMARY KEY (id)
);

ALTER TABLE public.account OWNER TO postgres;

ALTER TABLE public.transaction ADD CONSTRAINT account_fk FOREIGN KEY (id_account)
REFERENCES public.account (id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;


CREATE TABLE settings (
	id SERIAL PRIMARY KEY,
	default_currency VARCHAR(15) NOT NULL,
	migrated BOOLEAN NOT NULL,
	UNIQUE(id)
);

ALTER TABLE public.settings OWNER TO postgres;

INSERT INTO settings (default_currency, migrated) VALUES ('eur', false);
