// import uuid from 'uuid'
import { Agent, IncomingMessage } from 'http'
import * as got from 'got'

interface SiteData {
  server_revision: number
  client_revision: number
  tier: string
  push_phase: string
  pkg_cohort: string
  pr: 1
  haste_site: string
  be_mode: number
  be_key: string
  ir_on: true
  is_rtl: false
  is_comet: false
  hsi: string
  vip: string
}

export type Context = any & {
  id: any
  is_temporarily: boolean
  fb_dtsg: string
  status: string
  start: number
  uid: string
  headers: any
  agent?: Agent
  sitedata?: SiteData
}

export interface Options extends got.GotFn, got.GotFormOptions<null> {
  ctx: Context
  decodeBodyAjax?: boolean
}

export interface RequestOptions extends Partial<got.GotFormOptions<null>> {
  ctx: Context
}

export interface Response extends got.Response<any> {
  request: any
}

export interface GotResponse<B> extends IncomingMessage {
  body: B
  url: string
  requestUrl: string
  fromCache: boolean
  redirectUrls?: string[]
}

export type RequestPromise<T> = Promise<GotResponse<T>>
