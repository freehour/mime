/**
 * This module provides the `Mime` class for handling MIME types, including parsing, comparison, and detection.
 *
 * @fileoverview Exports the `Mime` class for handling MIME types.
 */

import { MimeDetection } from './detection';
import { MimeParseError } from './error';
import type { FileExtension } from './file-extension';
import { inferMimeFromExtension } from './file-extension';
import { uniqueBy } from './utils';


export const MimeSubtype = {
    application: [
        'andrew-inset',
        'atom+xml',
        'atomcat+xml',
        'atomsvc+xml',
        'ccxml+xml',
        'cdmi-capability',
        'cdmi-container',
        'cdmi-domain',
        'cdmi-object',
        'cdmi-queue',
        'cu-seeme',
        'davmount+xml',
        'docbook+xml',
        'dssc+der',
        'dssc+xml',
        'emma+xml',
        'epub+zip',
        'exi',
        'gzip',
        'hyperstudio',
        'java-archive',
        'javascript',
        'json',
        'jsonl',
        'ld+json',
        'mac-binhex40',
        'mac-compactpro',
        'mathematica',
        'mbox',
        'mediaservercontrol+xml',
        'metalink4+xml',
        'mets+xml',
        'mods+xml',
        'mp21',
        'mp4',
        'msword',
        'mxf',
        'octet-stream',
        'oda',
        'ogg',
        'onenote',
        'oxps',
        'patch-ops-error+xml',
        'pdf',
        'pgp-encrypted',
        'pgp-signature',
        'pics-rules',
        'pkcs10',
        'pkcs7-mime',
        'pkcs7-signature',
        'pkcs8',
        'pkix-cert',
        'pkix-crl',
        'pkixcmp',
        'pkix-pkipath',
        'postscript',
        'prs.cww',
        'rdf+xml',
        'reginfo+xml',
        'relax-ng-compact-syntax',
        'resource-lists+xml',
        'resource-lists-diff+xml',
        'rls-services+xml',
        'rpki-ghostbusters',
        'rpki-manifest',
        'rpki-roa',
        'rss+xml',
        'rtf',
        'sbml+xml',
        'scvp-cv-request',
        'scvp-cv-response',
        'scvp-vp-request',
        'scvp-vp-response',
        'sdp',
        'set-payment-initiation',
        'set-registration-initiation',
        'shf+xml',
        'smil+xml',
        'sparql-query',
        'sparql-results+xml',
        'srgs',
        'srgs+xml',
        'sru+xml',
        'ssml+xml',
        'timestamped-data',
        'vnd.3gpp.pic-bw-large',
        'vnd.3gpp.pic-bw-small',
        'vnd.3gpp.pic-bw-var',
        'vnd.3gpp2.tcap',
        'vnd.3m.post-it-notes',
        'vnd.accpac.simply.aso',
        'vnd.accpac.simply.imp',
        'vnd.acucobol',
        'vnd.acucorp',
        'vnd.adobe.air-application-installer-package+zip',
        'vnd.adobe.xdp+xml',
        'vnd.adobe.xfdf',
        'vnd.ahead.space',
        'vnd.airzip.filesecure.azf',
        'vnd.airzip.filesecure.azs',
        'vnd.amazon.ebook',
        'vnd.americandynamics.acc',
        'vnd.amiga.ami',
        'vnd.android.package-archive',
        'vnd.anser-web-certificate-issue-initiation',
        'vnd.anser-web-funds-transfer-initiation',
        'vnd.antix.game-component',
        'vnd.apple.installer+xml',
        'vnd.apple.mpegurl',
        'vnd.aristanetworks.swi',
        'vnd.astraea-software.iota',
        'vnd.audiograph',
        'vnd.blueice.multipass',
        'vnd.bmi',
        'vnd.businessobjects',
        'vnd.chemdraw+xml',
        'vnd.chipnuts.karaoke-mmd',
        'vnd.cinderella',
        'vnd.claymore',
        'vnd.cloanto.rp9',
        'vnd.clonk.c4group',
        'vnd.cluetrust.cartomobile-config',
        'vnd.cluetrust.cartomobile-config-pkg',
        'vnd.commonspace',
        'vnd.contact.cmsg',
        'vnd.cosmocaller',
        'vnd.crick.clicker',
        'vnd.crick.clicker.keyboard',
        'vnd.crick.clicker.palette',
        'vnd.crick.clicker.template',
        'vnd.crick.clicker.wordbank',
        'vnd.criticaltools.wbs+xml',
        'vnd.ctc-posml',
        'vnd.cups-ppd',
        'vnd.curl.car',
        'vnd.curl.pcurl',
        'vnd.data-vision.rdz',
        'vnd.denovo.fcselayout-link',
        'vnd.dna',
        'vnd.dolby.mlp',
        'vnd.dpgraph',
        'vnd.dreamfactory',
        'vnd.dvb.ait',
        'vnd.dvb.service',
        'vnd.dynageo',
        'vnd.ecowin.chart',
        'vnd.enliven',
        'vnd.epson.esf',
        'vnd.epson.msf',
        'vnd.epson.quickanime',
        'vnd.epson.salt',
        'vnd.epson.ssf',
        'vnd.eszigno3+xml',
        'vnd.ezpix-album',
        'vnd.ezpix-package',
        'vnd.fdf',
        'vnd.fdsn.seed',
        'vnd.flographit',
        'vnd.fluxtime.clip',
        'vnd.framemaker',
        'vnd.frogans.fnc',
        'vnd.frogans.ltf',
        'vnd.fsc.weblaunch',
        'vnd.fujitsu.oasys',
        'vnd.fujitsu.oasys2',
        'vnd.fujitsu.oasys3',
        'vnd.fujitsu.oasysgp',
        'vnd.fujitsu.oasysprs',
        'vnd.fujixerox.ddd',
        'vnd.fujixerox.docuworks',
        'vnd.fujixerox.docuworks.binder',
        'vnd.fuzzysheet',
        'vnd.genomatix.tuxedo',
        'vnd.geogebra.file',
        'vnd.geogebra.tool',
        'vnd.geometry-explorer',
        'vnd.geonext',
        'vnd.geoplan',
        'vnd.geospace',
        'vnd.gmx',
        'vnd.google-earth.kml+xml',
        'vnd.google-earth.kmz',
        'vnd.grafeq',
        'vnd.groove-account',
        'vnd.groove-help',
        'vnd.groove-identity-message',
        'vnd.groove-injector',
        'vnd.groove-tool-message',
        'vnd.groove-tool-template',
        'vnd.groove-vcard',
        'vnd.hal+xml',
        'vnd.handheld-entertainment+xml',
        'vnd.hbci',
        'vnd.hhe.lesson-player',
        'vnd.hp-hpgl',
        'vnd.hp-hpid',
        'vnd.hp-hps',
        'vnd.hp-jlyt',
        'vnd.hp-pcl',
        'vnd.hp-pclxl',
        'vnd.hydrostatix.sof-data',
        'vnd.ibm.minipay',
        'vnd.ibm.modcap',
        'vnd.ibm.rights-management',
        'vnd.ibm.secure-container',
        'vnd.iccprofile',
        'vnd.igloader',
        'vnd.immervision-ivp',
        'vnd.immervision-ivu',
        'vnd.insors.igm',
        'vnd.intercon.formnet',
        'vnd.intergeo',
        'vnd.intu.qbo',
        'vnd.intu.qfx',
        'vnd.ipunplugged.rcprofile',
        'vnd.irepository.package+xml',
        'vnd.is-xpr',
        'vnd.isac.fcs',
        'vnd.jam',
        'vnd.jcp.javame.midlet-rms',
        'vnd.jisp',
        'vnd.joost.joda-archive',
        'vnd.kahootz',
        'vnd.kde.karbon',
        'vnd.kde.kchart',
        'vnd.kde.kformula',
        'vnd.kde.kivio',
        'vnd.kde.kontour',
        'vnd.kde.kpresenter',
        'vnd.kde.kspread',
        'vnd.kde.kword',
        'vnd.kenameaapp',
        'vnd.kidspiration',
        'vnd.kinar',
        'vnd.koan',
        'vnd.kodak-descriptor',
        'vnd.las.las+xml',
        'vnd.llamagraphics.life-balance.desktop',
        'vnd.llamagraphics.life-balance.exchange+xml',
        'vnd.lotus-1-2-3',
        'vnd.lotus-approach',
        'vnd.lotus-freelance',
        'vnd.lotus-notes',
        'vnd.lotus-organizer',
        'vnd.lotus-wordpro',
        'vnd.macports.portpkg',
        'vnd.mcd',
        'vnd.medcalcdata',
        'vnd.mediastation.cdkey',
        'vnd.mfer',
        'vnd.mfmp',
        'vnd.micrografx.flo',
        'vnd.micrografx.igx',
        'vnd.mif',
        'vnd.mobius.daf',
        'vnd.mobius.dis',
        'vnd.mobius.mbk',
        'vnd.mobius.mqy',
        'vnd.mobius.msl',
        'vnd.mobius.plc',
        'vnd.mobius.txf',
        'vnd.mophun.application',
        'vnd.mophun.certificate',
        'vnd.mozilla.xul+xml',
        'vnd.ms-artgalry',
        'vnd.ms-cab-compressed',
        'vnd.ms-excel',
        'vnd.ms-excel.addin.macroenabled.12',
        'vnd.ms-excel.sheet.binary.macroenabled.12',
        'vnd.ms-excel.sheet.macroenabled.12',
        'vnd.ms-excel.template.macroenabled.12',
        'vnd.ms-fontobject',
        'vnd.ms-htmlhelp',
        'vnd.ms-ims',
        'vnd.ms-lrm',
        'vnd.ms-outlook',
        'vnd.ms-pki.seccat',
        'vnd.ms-pki.stl',
        'vnd.ms-powerpoint',
        'vnd.ms-powerpoint.addin.macroenabled.12',
        'vnd.ms-powerpoint.presentation.macroenabled.12',
        'vnd.ms-powerpoint.slide.macroenabled.12',
        'vnd.ms-powerpoint.slideshow.macroenabled.12',
        'vnd.ms-powerpoint.template.macroenabled.12',
        'vnd.ms-project',
        'vnd.ms-works',
        'vnd.ms-wpl',
        'vnd.ms-xpsdocument',
        'vnd.mseq',
        'vnd.muvee.style',
        'vnd.musician',
        'vnd.mynfc',
        'vnd.nokia.n-gage.data',
        'vnd.nokia.n-gage.symbian.install',
        'vnd.nokia.radio-preset',
        'vnd.nokia.radio-presets',
        'vnd.novadigm.edm',
        'vnd.novadigm.edx',
        'vnd.novadigm.ext',
        'vnd.oasis.opendocument.chart',
        'vnd.oasis.opendocument.chart-template',
        'vnd.oasis.opendocument.database',
        'vnd.oasis.opendocument.formula',
        'vnd.oasis.opendocument.formula-template',
        'vnd.oasis.opendocument.graphics',
        'vnd.oasis.opendocument.graphics-template',
        'vnd.oasis.opendocument.image',
        'vnd.oasis.opendocument.image-template',
        'vnd.oasis.opendocument.presentation',
        'vnd.oasis.opendocument.presentation-template',
        'vnd.oasis.opendocument.spreadsheet',
        'vnd.oasis.opendocument.spreadsheet-template',
        'vnd.oasis.opendocument.text',
        'vnd.oasis.opendocument.text-master',
        'vnd.oasis.opendocument.text-template',
        'vnd.oasis.opendocument.text-web',
        'vnd.olpc-sugar',
        'vnd.oma.dd2+xml',
        'vnd.openofficeorg.extension',
        'vnd.openxmlformats-officedocument.presentationml.presentation',
        'vnd.openxmlformats-officedocument.presentationml.slide',
        'vnd.openxmlformats-officedocument.presentationml.slideshow',
        'vnd.openxmlformats-officedocument.presentationml.template',
        'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'vnd.openxmlformats-officedocument.spreadsheetml.template',
        'vnd.openxmlformats-officedocument.wordprocessingml.document',
        'vnd.openxmlformats-officedocument.wordprocessingml.template',
        'vnd.osgi.dp',
        'vnd.palm',
        'vnd.pg.format',
        'vnd.pg.osasli',
        'vnd.picsel',
        'vnd.pmi.widget',
        'vnd.pocketlearn',
        'vnd.powerbuilder6',
        'vnd.previewsystems.box',
        'vnd.proteus.magazine',
        'vnd.publishare-delta-tree',
        'vnd.pvi.ptid1',
        'vnd.quark.quarkxpress',
        'vnd.realvnc.bed',
        'vnd.recordare.musicxml',
        'vnd.recordare.musicxml+xml',
        'vnd.rig.cryptonote',
        'vnd.route66.link66+xml',
        'vnd.sailingtracker.track',
        'vnd.seemail',
        'vnd.sema',
        'vnd.semd',
        'vnd.semf',
        'vnd.shana.informed.formdata',
        'vnd.shana.informed.formtemplate',
        'vnd.shana.informed.interchange',
        'vnd.shana.informed.package',
        'vnd.simtech-mindmapper',
        'vnd.smaf',
        'vnd.smart.teacher',
        'vnd.solent.sdkm+xml',
        'vnd.spotfire.dxp',
        'vnd.spotfire.sfs',
        'vnd.stardivision.calc',
        'vnd.stardivision.draw',
        'vnd.stardivision.impress',
        'vnd.stardivision.math',
        'vnd.stardivision.writer',
        'vnd.stardivision.writer-global',
        'vnd.stepmania.stepchart',
        'vnd.sun.xml.calc',
        'vnd.sun.xml.calc.template',
        'vnd.sun.xml.draw',
        'vnd.sun.xml.draw.template',
        'vnd.sun.xml.impress',
        'vnd.sun.xml.impress.template',
        'vnd.sun.xml.math',
        'vnd.sun.xml.writer',
        'vnd.sun.xml.writer.global',
        'vnd.sun.xml.writer.template',
        'vnd.sus-calendar',
        'vnd.svd',
        'vnd.symbian.install',
        'vnd.syncml.dm+wbxml',
        'vnd.syncml.dm+xml',
        'vnd.syncml+xml',
        'vnd.tao.intent-module-archive',
        'vnd.tmobile-livetv',
        'vnd.trid.tpt',
        'vnd.triscape.mxs',
        'vnd.trueapp',
        'vnd.ufdl',
        'vnd.uiq.theme',
        'vnd.umajin',
        'vnd.unity',
        'vnd.uoml+xml',
        'vnd.vcx',
        'vnd.visionary',
        'vnd.visio',
        'vnd.visio2013',
        'vnd.vsf',
        'vnd.wap.wbxml',
        'vnd.wap.wmlc',
        'vnd.wap.wmlscriptc',
        'vnd.webturbo',
        'vnd.wolfram.player',
        'vnd.wordperfect',
        'vnd.wqd',
        'vnd.wt.stf',
        'vnd.xara',
        'vnd.zzazz.deck+xml',
        'voicexml+xml',
        'wasm',
        'winhlp',
        'wsdl+xml',
        'wspolicy+xml',
        'x-7z-compressed',
        'x-abiword',
        'x-ace-compressed',
        'x-apple-diskimage',
        'x-authorware-bin',
        'x-authorware-map',
        'x-authorware-seg',
        'x-bcpio',
        'x-bittorrent',
        'x-bzip',
        'x-bzip2',
        'x-cdf',
        'x-cdlink',
        'x-chat',
        'x-chess-pgn',
        'x-cpio',
        'x-debian-package',
        'x-director',
        'x-dvi',
        'x-font-bdf',
        'x-font-ghostscript',
        'x-font-otf',
        'x-font-pcf',
        'x-font-snf',
        'x-font-ttf',
        'x-font-type1',
        'x-futuresplash',
        'x-gnumeric',
        'x-go',
        'x-gotmpl',
        'x-gtar',
        'x-hdf',
        'x-java-jnlp-file',
        'x-latex',
        'x-mobipocket-ebook',
        'x-ms-application',
        'x-ms-shortcut',
        'x-ms-wmd',
        'x-ms-wmz',
        'x-ms-xbap',
        'x-msaccess',
        'x-msbinder',
        'x-mscardfile',
        'x-msclip',
        'x-msdownload',
        'x-msmediaview',
        'x-msmetafile',
        'x-msmoney',
        'x-mspublisher',
        'x-msschedule',
        'x-msterminal',
        'x-mswrite',
        'x-netcdf',
        'x-pem-file',
        'x-pkcs12',
        'x-pkcs7-certificates',
        'x-pkcs7-certreqresp',
        'x-rar-compressed',
        'x-sh',
        'x-shar',
        'x-shockwave-flash',
        'x-stuffit',
        'x-stuffitx',
        'x-subrip',
        'x-sv4cpio',
        'x-sv4crc',
        'x-tar',
        'x-tcl',
        'x-tex',
        'x-tex-tfm',
        'x-texinfo',
        'x-ustar',
        'x-wais-source',
        'x-x509-ca-cert',
        'x-xfig',
        'x-xliff+xml',
        'x-xpinstall',
        'xop+xml',
        'xslt+xml',
        'yang',
        'yin+xml',
        'zip',
    ],
    audio: [
        'aac',
        'adpcm',
        'basic',
        'midi',
        'mp4',
        'mpeg',
        'ogg',
        'vnd.dece.audio',
        'vnd.digital-winds',
        'vnd.dra',
        'vnd.dts',
        'vnd.dts.hd',
        'vnd.lucent.voice',
        'vnd.ms-playready.media.pya',
        'vnd.nuera.ecelp4800',
        'vnd.nuera.ecelp7470',
        'vnd.nuera.ecelp9600',
        'vnd.rip',
        'vnd.wave',
        'wav',
        'webm',
        'x-aac',
        'x-aiff',
        'x-mpegurl',
        'x-ms-wax',
        'x-ms-wma',
        'x-pn-realaudio',
        'x-pn-realaudio-plugin',
    ],
    font: [
        'collection',
        'otf',
        'sfnt',
        'ttf',
        'woff',
        'woff2',
    ],
    image: [
        'bmp',
        'cgm',
        'g3fax',
        'gif',
        'ief',
        'jpeg',
        'ktx',
        'png',
        'prs.btif',
        'svg+xml',
        'tiff',
        'vnd.adobe.photoshop',
        'vnd.dece.graphic',
        'vnd.djvu',
        'vnd.dwg',
        'vnd.dxf',
        'vnd.fastbidsheet',
        'vnd.fpx',
        'vnd.fst',
        'vnd.fujixerox.edmics-mmr',
        'vnd.fujixerox.edmics-rlc',
        'vnd.ms-modi',
        'vnd.net-fpx',
        'vnd.wap.wbmp',
        'vnd.xiff',
        'webp',
        'x-cmu-raster',
        'x-cmx',
        'x-icon',
        'x-pcx',
        'x-pict',
        'x-portable-anymap',
        'x-portable-bitmap',
        'x-portable-graymap',
        'x-portable-pixmap',
        'x-rgb',
        'x-xbitmap',
        'x-xpixmap',
        'x-xwindowdump',
    ],
    message: [
        'rfc822',
        'http',
        'imdn+xml',
        'partial',
        's-http',
        'sip',
        'sips',
        'tracking-status+xml',
    ],
    model: [
        'iges',
        'mesh',
        'vnd.collada+xml',
        'vnd.dwf',
        'vnd.gdl',
        'vnd.gtw',
        'vnd.mts',
        'vnd.vtu',
        'vrml',
    ],
    multipart: [
        'alternative',
        'byteranges',
        'digest',
        'encrypted',
        'form-data',
        'mixed',
        'parallel',
        'related',
        'report',
        'signed',
        'voice-message',
    ],
    text: [
        'cache-manifest',
        'calendar',
        'css',
        'csv',
        'html',
        'n3',
        'plain',
        'prs.lines.tag',
        'richtext',
        'sgml',
        'tab-separated-values',
        'troff',
        'turtle',
        'uri-list',
        'vnd.curl',
        'vnd.curl.dcurl',
        'vnd.curl.mcurl',
        'vnd.curl.scurl',
        'vnd.fly',
        'vnd.fmi.flexstor',
        'vnd.graphviz',
        'vnd.in3d.3dml',
        'vnd.in3d.spot',
        'vnd.sun.j2me.app-descriptor',
        'vnd.wap.wml',
        'vnd.wap.wmlscript',
        'x-asm',
        'x-c',
        'x-c++src',
        'x-chdr',
        'x-csharp',
        'x-fortran',
        'x-java-source',
        'x-pascal',
        'x-setext',
        'x-uuencode',
        'x-vb',
    ],
    video: [
        '3gpp',
        '3gpp2',
        'h261',
        'h263',
        'h264',
        'jpeg',
        'jpm',
        'mj2',
        'mp4',
        'mpeg',
        'ogg',
        'quicktime',
        'vnd.dece.hd',
        'vnd.dece.mobile',
        'vnd.dece.pd',
        'vnd.dece.sd',
        'vnd.dece.video',
        'vnd.dvb.file',
        'vnd.fvt',
        'vnd.mpegurl',
        'vnd.ms-playready.media.pyv',
        'vnd.uvvu.mp4',
        'vnd.vivo',
        'webm',
        'x-f4v',
        'x-fli',
        'x-flv',
        'x-m4v',
        'x-matroska',
        'x-ms-asf',
        'x-ms-wm',
        'x-ms-wmv',
        'x-ms-wmx',
        'x-ms-wvx',
        'x-msvideo',
        'x-sgi-movie',
    ],
} as const;

/**
 * Represents a base MIME type.
 * This is the primary category of the MIME type, e.g. `text`, `image`, `audio`, etc.
 * Can be a wildcard `*` to match any type.
 */
export type MimeType = keyof typeof MimeSubtype | '*' | (string & {});

/**
 * Represents a MIME subtype.
 * This is the specific format within the MIME type, e.g. `plain`, `jpeg`, `mp3`, etc.
 * Can be a wildcard `*` to match any subtype.
 * If the type is `*`, the subtype must also be `*`.
 */
export type MimeSubtype<T extends MimeType = MimeType> = T extends keyof typeof MimeSubtype
    ? typeof MimeSubtype[T & keyof typeof MimeSubtype][number] | '*' | (string & {})
    : T extends '*'
        ? '*'
        : '*' | (string & {});


type KnownMimeCode<T extends MimeType = MimeType> = T extends keyof typeof MimeSubtype
    ? `${T}/${typeof MimeSubtype[T & keyof typeof MimeSubtype][number] | '*'}`
    : never;

/**
 * Represents a MIME code without parameters.
 * This is the string representation of the MIME `type/subtype`, e.g. `text/plain`, `image/jpeg`, `audio/mp3`, etc.
 * Both type and subtype can be wildcards `*`.
 * If the type is `*`, the subtype must also be `*`.
 */
export type MimeCode<T extends MimeType = MimeType> = T extends keyof typeof MimeSubtype
    ? KnownMimeCode<T>
    : T extends '*'
        ? '*/*'
        : KnownMimeCode | (`${string}/${string}` & {});

/**
 * Represents a MIME type string.
 * This is the string representation of a MIME type, including parameters.
 * The format is `type/subtype; key=value; ...`.
 */
export type MimeString = MimeCode | (string & {});


export interface MimeCompareOptions {

    /**
     * Whether to check parameters in the comparison.
     * If `false`, parameters are ignored in the comparison.
     * @default true
     * @example
     * Mime.parse('text/plain; charset=utf-8').equals(Mime.parse('text/plain'), { checkParameters: false }); // true
     */
    checkParameters?: boolean;
}

export interface MimeParams<Type extends MimeType = MimeType> {

    /**
     * The type of the MIME type is the primary category, e.g. `text`, `image`, `audio`, etc.
     * Can be a wildcard `*` to match any type, forces the subtype to also be `*`.
     */
    type?: Type;

    /**
     * The subtype of the MIME type is the specific format within the type, e.g. `plain`, `jpeg`, `mp3`, etc.
     * Can be a wildcard `*` to match any subtype.
     */
    subtype?: MimeSubtype<Type>;

    /**
     * Additional parameters as key-value pairs, e.g. `charset=utf-8`.
     */
    parameters?: Record<string, string>;
}


/**
 * Represents a MIME type with its type, subtype, and parameters.
 * Provides methods to compare MIME types, check for inclusion, and parse MIME strings.
 */
export class Mime<Type extends MimeType = MimeType> {
    readonly type: Type;
    readonly subtype: MimeSubtype<Type>;
    readonly parameters: Record<string, string>;

    constructor({
        type = '*' as Type,
        subtype = '*' as MimeSubtype<Type>,
        parameters = {},
    }: MimeParams<Type> = {}) {
        this.type = type;
        this.subtype = subtype;
        this.parameters = parameters;
    }

    /**
     * Whether this MIME type has any parameters, e.g. 'charset=utf-8'.
     */
    get hasParameters(): boolean {
        return Object.keys(this.parameters).length > 0;
    }

    /**
     * Checks the equality of two MIME types.
     *
     * @param other The other MIME type to compare against.
     * @returns Whether the two MIME types are equal.
     */
    equals(
        other: Mime | MimeString,
        { checkParameters = true }: MimeCompareOptions = {},
    ): boolean {
        const mime = other instanceof Mime ? other : Mime.parse(other);
        return this.type === mime.type
            && this.subtype === mime.subtype
            && (!checkParameters
                || (
                    Object.keys(this.parameters).length === Object.keys(mime.parameters).length
                    && Object.entries(this.parameters).every(
                        ([k, v]) => mime.parameters[k] === v,
                    )
                )
            );
    }

    /**
     * Checks if this MIME type includes another MIME type.
     * This means that the type and subtype match or are included by wildcards,
     * and all parameters of the other MIME type are included in this MIME type.
     *
     * @param other The other MIME type to check against.
     * @returns Whether this MIME type includes the other MIME type.
     *
     * @example
     * const accepted = Mime.parse('text/*').includes(Mime.parse('text/plain')); // true
     */
    includes(
        other: Mime | MimeString,
        { checkParameters = true }: MimeCompareOptions = {},
    ): boolean {
        const mime = other instanceof Mime ? other : Mime.parse(other);
        return (this.type === '*' || this.type === mime.type)
            && (this.subtype === '*' || this.subtype === mime.subtype)
            && (!checkParameters
                || Object.entries(this.parameters).every(
                    ([k, v]) => mime.parameters[k] === v,
                )
            );
    }

    /**
     * Returns a string representation of the MIME type.
     * The format is `type/subtype; key=value; ...` for parameters.
     *
     * @returns The string representation of the MIME type.
     * @example
     * const mime = new Mime({ type: 'text', subtype: 'plain', parameters: { charset: 'utf-8' } });
     * mime.toString(); // "text/plain; charset=utf-8"
     */
    toString(): string {
        // MIME pattern string
        const mime = `${this.type}/${this.subtype}`;

        // without parameters
        if (Object.keys(this.parameters).length === 0) {
            return mime;
        }

        // with parameters
        const parts = Object.entries(this.parameters)
            .map(([k, v]) => `${k}=${v}`);
        return `${mime}; ${parts.join('; ')}`;
    }

    /**
     * Detects the MIME type from a buffer data (e.g. file content).
     * Returns a possible list of MIME types that match the content.
     *
     * @param buffer The buffer data to detect the MIME type from.
     * @param detection An optional MIME detection instance to use. If not provided, a new instance will be created.
     *
     * @see {@link MimeDetection}
     */
    static async detect(buffer: Uint8Array | ArrayBuffer, detection = new MimeDetection()): Promise<Mime[]> {
        return detection.parse(buffer).then(
            definitions => uniqueBy(
                definitions.map(definition => new Mime(definition)),
                mime => mime.toString(),
            ),
        );
    }

    /**
     * Lists the considered MIME types for automatic detection from file content.
     *
     * @returns An array of known MIME types.
     */
    static knownTypes(): Mime[] {
        const detection = new MimeDetection();
        return uniqueBy(
            detection.definitions.map(definition => new Mime(definition)),
            mime => mime.toString(),
        );
    }

    /**
     * Parses a MIME type string into a `Mime` object.
     * The string must be in the format `type/subtype; key=value; ...`.
     *
     * @param mime The MIME string to parse.
     * @returns Result with a `Mime` object representing the parsed MIME type or a `ParseError` if the string is invalid.
     * @throws {MimeParseError} If the MIME type string is invalid.
     * @example
     * Mime.parse('text/plain; charset=utf-8'); // Mime { type: 'text', subtype: 'plain', parameters: { charset: 'utf-8' } }
     */
    static parse(mime: MimeString): Mime {
        const TOKEN = /^[A-Za-z0-9!#$&^_.+-]+$/;
        const SUPPORTED_CHARS = '*, A-Z, a-z, 0-9, !, #, $, &, ^, _, ., +, -';

        // split MIME into type/subtype and parameters
        const [mediaTypePart = mime, ...paramParts] = mime.split(';');
        const mediaType = mediaTypePart.trim();

        // Parse type/subtype
        if (!mediaType.includes('/')) {
            throw new MimeParseError('Invalid MIME: missing type/subtype', {
                expression: mime,
                format: 'type/subtype; parameters',
            });
        }
        const [type = '', subtype = ''] = mediaType.split('/').map(s => s.trim().toLowerCase());

        if (type !== '*' && !TOKEN.test(type)) {
            throw new MimeParseError(`Invalid MIME type: '${type}'`, {
                expression: mime,
                format: `Supported characters: ${SUPPORTED_CHARS}`,
            });
        }
        if (subtype !== '*' && !TOKEN.test(subtype)) {
            throw new MimeParseError(`Invalid MIME subtype: '${subtype}'`, {
                expression: mime,
                format: `Supported characters: ${SUPPORTED_CHARS}`,
            });
        }

        // Parse parameters
        const parameters: Record<string, string> = {};
        for (const param of paramParts) {
            const trimmedParam = param.trim();
            if (trimmedParam.length > 0) {
                if (!trimmedParam.includes('=')) {
                    throw new MimeParseError(`Invalid MIME parameter: '${trimmedParam}'`, {
                        expression: mime,
                        format: 'key=value',
                    });
                }
                const [key = '', value = ''] = trimmedParam.split('=').map(s => s.trim());

                if (!key || !TOKEN.test(key)) {
                    throw new MimeParseError(`Invalid MIME parameter key: '${key}'`, {
                        expression: mime,
                        format: `Supported characters: ${SUPPORTED_CHARS}`,
                    });
                }

                const unquotedValue = value.startsWith('"') && value.endsWith('"')
                    ? value.slice(1, -1)
                    : value;

                if (unquotedValue.length > 0 && !TOKEN.test(unquotedValue)) {
                    throw new MimeParseError(`Invalid MIME parameter value: '${value}'`, {
                        expression: mime,
                        format: `Supported characters: ${SUPPORTED_CHARS}`,
                    });
                }

                parameters[key.toLowerCase()] = unquotedValue;
            }
        }

        return new Mime({
            type,
            subtype,
            parameters,
        });
    }

    /**
     * Infers a MIME type from a file extension.
     * @param extension The file extension to infer the MIME type from.
     * @returns The inferred MIME type as a `Mime` object, or `undefined` if the extension is not recognized.
     * @see inferMimeFromExtension
     */
    static fromExtension(extension: FileExtension): Mime | undefined {
        const mime = inferMimeFromExtension(extension);
        return mime !== undefined ? Mime.parse(mime) : undefined;
    }

    /**
     * Normalizes a MIME type string to a canonical form.
     * This includes parsing the MIME type and returning its string representation.
     *
     * @param mime The MIME string to normalize.
     * @returns The normalized MIME type string.
     * @throws {ParseError} If the MIME type string is invalid.
     * @example
     * Mime.normalize('text / plain;  charset ="utf-8"'); // 'text/plain; charset=utf-8'
     */
    static normalize(mime: MimeString): string {
        return Mime.parse(mime).toString();
    }

    /**
     * Compares a list of source MIME types against a list of target MIME types.
     * Checks if one of the source types includes one of the target MIME types.
     * This can be used for mime support validation.
     *
     * @returns Whether one of the source MIME types includes one of the target MIME types.
     * @example
     * Mime.includes(supportedTypes, ...fileTypes)
     */
    static includes(
        srcTypes: Mime[],
        targetTypes: Mime[],
        options: MimeCompareOptions = {},
    ): boolean {
        return srcTypes.some(
            srcType => targetTypes.some(
                targetType => srcType.includes(targetType, options),
            ),
        );
    }
}

