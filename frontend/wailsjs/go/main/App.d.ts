// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {applications} from '../models';
import {extensions} from '../models';

export function GetClipText():Promise<string>;

export function GetConfig():Promise<{[key: string]: any}>;

export function GetRunHistory():Promise<applications.RunHistory>;

export function GoogleTranslate(arg1:string,arg2:string,arg3:string):Promise<string>;

export function Greet(arg1:string):Promise<string>;

export function Hide():Promise<void>;

export function ListApplications():Promise<Array<applications.Application>>;

export function ListExtension(arg1:extensions.ListReq):Promise<extensions.ListResp>;

export function RunApplication(arg1:string,arg2:string,arg3:string,arg4:boolean):Promise<void>;

export function SetClipText(arg1:string):Promise<void>;

export function SetConfig(arg1:string,arg2:any):Promise<void>;

export function Show():Promise<void>;

export function ToBlur():Promise<void>;

export function ToFocus():Promise<void>;
