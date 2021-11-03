const backendUrl: string = "https://choixdici-backend.herokuapp.com/";

const authRoute: string = `${backendUrl}auth/`;
const structureRoute: string = `${backendUrl}structure/`;
const eventRoute: string = `${backendUrl}event/`;

export enum HttpMethod {
	GET = "GET",
	POST = "POST",
	PUT = "PUT",
}

export const queryHeader: HeadersInit = {
	"Content-Type": "application/json",
};

export const createUserRoute: string = `${authRoute}create`;
export interface CreateUserDto {
	email: string;
	firstName: string;
	lastName: string;
	admin: boolean;
	structure: string;
	pwd: string;
	superuser: string;
}

export const loginUserRoute: string = `${authRoute}login`;
export interface LoginUserDto {
	email: string;
	pwd: string;
}

export const createStructureRoute: string = `${structureRoute}create`;
export interface CreateStructureDto {
	name: string;
	localite: string;
	categorie: string;
	superuser: string;
}
export const getStructureRoute: string = `${structureRoute}get`;
export interface GetStructureDto {
	name: string;
}
export const getAllStructureRoute: string = `${structureRoute}getAll`;
export const updateStructureRoute: string = `${structureRoute}update`;
export interface UpdateStructureDto {
	name: string;
	localite: string;
	categorie: string;
}
export const deleteStructureRoute: string = `${structureRoute}delete`;
export interface DeleteStructureDto {
	name: string;
}

export const createEventRoute: string = `${eventRoute}create`;
export interface CreateEventDto {
	name: string;
	date: Date;
	lieu: string;
	categorie: string;
	structure: string;
	superuser: string;
}
export const getEventRoute: string = `${eventRoute}get`;
export interface GetEventDto {
	name: string;
}
export const getAllEventRoute: string = `${eventRoute}getAll`;
export const getAllEventForStructRoute: string = `${eventRoute}getAllForStruct`;
export interface GetAllEventForStructDto {
	structure: string;
}
export interface GetAllEventForStructResponseDto {
	date: Date;
	lieu: string;
	categorie: string;
	structure: string;
}

export const getAllEventForCategorieRoute: string = `${eventRoute}getAllForCategorie`;
export interface GetAllEventForCategorieDto {
	categorie: string;
}
export const updateEventRoute: string = `${eventRoute}update`;
export interface UpdateEventDto {
	name: string;
	date: Date;
	lieu: string;
	categorie: string;
	structure: string;
}
export const deleteEventRoute: string = `${eventRoute}delete`;
export interface DeleteEventDto {
	name: string;
}
