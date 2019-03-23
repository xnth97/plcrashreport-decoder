/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.plcrash = (function() {

    /**
     * Namespace plcrash.
     * @exports plcrash
     * @namespace
     */
    var plcrash = {};

    /**
     * Architecture enum.
     * @name plcrash.Architecture
     * @enum {string}
     * @property {number} X86_32=0 X86_32 value
     * @property {number} X86_64=1 X86_64 value
     * @property {number} ARMV6=2 ARMV6 value
     * @property {number} PPC=3 PPC value
     * @property {number} PPC64=4 PPC64
     * @property {number} ARMV7=5 ARMV7 value
     * @property {number} ARCHITECTURE_UNKNOWN=6 ARCHITECTURE_UNKNOWN value
     */
    plcrash.Architecture = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "X86_32"] = 0;
        values[valuesById[1] = "X86_64"] = 1;
        values[valuesById[2] = "ARMV6"] = 2;
        values[valuesById[3] = "PPC"] = 3;
        values[valuesById[4] = "PPC64"] = 4;
        values[valuesById[5] = "ARMV7"] = 5;
        values[valuesById[6] = "ARCHITECTURE_UNKNOWN"] = 6;
        return values;
    })();

    plcrash.CrashReport = (function() {

        /**
         * Properties of a CrashReport.
         * @memberof plcrash
         * @interface ICrashReport
         * @property {plcrash.CrashReport.ISystemInfo} systemInfo CrashReport systemInfo
         * @property {plcrash.CrashReport.IApplicationInfo} applicationInfo CrashReport applicationInfo
         * @property {Array.<plcrash.CrashReport.IThread>|null} [threads] CrashReport threads
         * @property {Array.<plcrash.CrashReport.IBinaryImage>|null} [binaryImages] CrashReport binaryImages
         * @property {plcrash.CrashReport.IException|null} [exception] CrashReport exception
         * @property {plcrash.CrashReport.ISignal} signal CrashReport signal
         * @property {plcrash.CrashReport.IProcessInfo|null} [processInfo] CrashReport processInfo
         * @property {plcrash.CrashReport.IMachineInfo|null} [machineInfo] CrashReport machineInfo
         * @property {plcrash.CrashReport.IReportInfo|null} [reportInfo] CrashReport reportInfo
         */

        /**
         * Constructs a new CrashReport.
         * @memberof plcrash
         * @classdesc Represents a CrashReport.
         * @implements ICrashReport
         * @constructor
         * @param {plcrash.ICrashReport=} [properties] Properties to set
         */
        function CrashReport(properties) {
            this.threads = [];
            this.binaryImages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CrashReport systemInfo.
         * @member {plcrash.CrashReport.ISystemInfo} systemInfo
         * @memberof plcrash.CrashReport
         * @instance
         */
        CrashReport.prototype.systemInfo = null;

        /**
         * CrashReport applicationInfo.
         * @member {plcrash.CrashReport.IApplicationInfo} applicationInfo
         * @memberof plcrash.CrashReport
         * @instance
         */
        CrashReport.prototype.applicationInfo = null;

        /**
         * CrashReport threads.
         * @member {Array.<plcrash.CrashReport.IThread>} threads
         * @memberof plcrash.CrashReport
         * @instance
         */
        CrashReport.prototype.threads = $util.emptyArray;

        /**
         * CrashReport binaryImages.
         * @member {Array.<plcrash.CrashReport.IBinaryImage>} binaryImages
         * @memberof plcrash.CrashReport
         * @instance
         */
        CrashReport.prototype.binaryImages = $util.emptyArray;

        /**
         * CrashReport exception.
         * @member {plcrash.CrashReport.IException|null|undefined} exception
         * @memberof plcrash.CrashReport
         * @instance
         */
        CrashReport.prototype.exception = null;

        /**
         * CrashReport signal.
         * @member {plcrash.CrashReport.ISignal} signal
         * @memberof plcrash.CrashReport
         * @instance
         */
        CrashReport.prototype.signal = null;

        /**
         * CrashReport processInfo.
         * @member {plcrash.CrashReport.IProcessInfo|null|undefined} processInfo
         * @memberof plcrash.CrashReport
         * @instance
         */
        CrashReport.prototype.processInfo = null;

        /**
         * CrashReport machineInfo.
         * @member {plcrash.CrashReport.IMachineInfo|null|undefined} machineInfo
         * @memberof plcrash.CrashReport
         * @instance
         */
        CrashReport.prototype.machineInfo = null;

        /**
         * CrashReport reportInfo.
         * @member {plcrash.CrashReport.IReportInfo|null|undefined} reportInfo
         * @memberof plcrash.CrashReport
         * @instance
         */
        CrashReport.prototype.reportInfo = null;

        /**
         * Creates a new CrashReport instance using the specified properties.
         * @function create
         * @memberof plcrash.CrashReport
         * @static
         * @param {plcrash.ICrashReport=} [properties] Properties to set
         * @returns {plcrash.CrashReport} CrashReport instance
         */
        CrashReport.create = function create(properties) {
            return new CrashReport(properties);
        };

        /**
         * Encodes the specified CrashReport message. Does not implicitly {@link plcrash.CrashReport.verify|verify} messages.
         * @function encode
         * @memberof plcrash.CrashReport
         * @static
         * @param {plcrash.ICrashReport} message CrashReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CrashReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.plcrash.CrashReport.SystemInfo.encode(message.systemInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.plcrash.CrashReport.ApplicationInfo.encode(message.applicationInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.threads != null && message.threads.length)
                for (var i = 0; i < message.threads.length; ++i)
                    $root.plcrash.CrashReport.Thread.encode(message.threads[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.binaryImages != null && message.binaryImages.length)
                for (var i = 0; i < message.binaryImages.length; ++i)
                    $root.plcrash.CrashReport.BinaryImage.encode(message.binaryImages[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.exception != null && message.hasOwnProperty("exception"))
                $root.plcrash.CrashReport.Exception.encode(message.exception, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            $root.plcrash.CrashReport.Signal.encode(message.signal, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.processInfo != null && message.hasOwnProperty("processInfo"))
                $root.plcrash.CrashReport.ProcessInfo.encode(message.processInfo, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.machineInfo != null && message.hasOwnProperty("machineInfo"))
                $root.plcrash.CrashReport.MachineInfo.encode(message.machineInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.reportInfo != null && message.hasOwnProperty("reportInfo"))
                $root.plcrash.CrashReport.ReportInfo.encode(message.reportInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CrashReport message, length delimited. Does not implicitly {@link plcrash.CrashReport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof plcrash.CrashReport
         * @static
         * @param {plcrash.ICrashReport} message CrashReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CrashReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CrashReport message from the specified reader or buffer.
         * @function decode
         * @memberof plcrash.CrashReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {plcrash.CrashReport} CrashReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CrashReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.systemInfo = $root.plcrash.CrashReport.SystemInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.applicationInfo = $root.plcrash.CrashReport.ApplicationInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.threads && message.threads.length))
                        message.threads = [];
                    message.threads.push($root.plcrash.CrashReport.Thread.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.binaryImages && message.binaryImages.length))
                        message.binaryImages = [];
                    message.binaryImages.push($root.plcrash.CrashReport.BinaryImage.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.exception = $root.plcrash.CrashReport.Exception.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.signal = $root.plcrash.CrashReport.Signal.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.processInfo = $root.plcrash.CrashReport.ProcessInfo.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.machineInfo = $root.plcrash.CrashReport.MachineInfo.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reportInfo = $root.plcrash.CrashReport.ReportInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("systemInfo"))
                throw $util.ProtocolError("missing required 'systemInfo'", { instance: message });
            if (!message.hasOwnProperty("applicationInfo"))
                throw $util.ProtocolError("missing required 'applicationInfo'", { instance: message });
            if (!message.hasOwnProperty("signal"))
                throw $util.ProtocolError("missing required 'signal'", { instance: message });
            return message;
        };

        /**
         * Decodes a CrashReport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof plcrash.CrashReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {plcrash.CrashReport} CrashReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CrashReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CrashReport message.
         * @function verify
         * @memberof plcrash.CrashReport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CrashReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.plcrash.CrashReport.SystemInfo.verify(message.systemInfo);
                if (error)
                    return "systemInfo." + error;
            }
            {
                var error = $root.plcrash.CrashReport.ApplicationInfo.verify(message.applicationInfo);
                if (error)
                    return "applicationInfo." + error;
            }
            if (message.threads != null && message.hasOwnProperty("threads")) {
                if (!Array.isArray(message.threads))
                    return "threads: array expected";
                for (var i = 0; i < message.threads.length; ++i) {
                    var error = $root.plcrash.CrashReport.Thread.verify(message.threads[i]);
                    if (error)
                        return "threads." + error;
                }
            }
            if (message.binaryImages != null && message.hasOwnProperty("binaryImages")) {
                if (!Array.isArray(message.binaryImages))
                    return "binaryImages: array expected";
                for (var i = 0; i < message.binaryImages.length; ++i) {
                    var error = $root.plcrash.CrashReport.BinaryImage.verify(message.binaryImages[i]);
                    if (error)
                        return "binaryImages." + error;
                }
            }
            if (message.exception != null && message.hasOwnProperty("exception")) {
                var error = $root.plcrash.CrashReport.Exception.verify(message.exception);
                if (error)
                    return "exception." + error;
            }
            {
                var error = $root.plcrash.CrashReport.Signal.verify(message.signal);
                if (error)
                    return "signal." + error;
            }
            if (message.processInfo != null && message.hasOwnProperty("processInfo")) {
                var error = $root.plcrash.CrashReport.ProcessInfo.verify(message.processInfo);
                if (error)
                    return "processInfo." + error;
            }
            if (message.machineInfo != null && message.hasOwnProperty("machineInfo")) {
                var error = $root.plcrash.CrashReport.MachineInfo.verify(message.machineInfo);
                if (error)
                    return "machineInfo." + error;
            }
            if (message.reportInfo != null && message.hasOwnProperty("reportInfo")) {
                var error = $root.plcrash.CrashReport.ReportInfo.verify(message.reportInfo);
                if (error)
                    return "reportInfo." + error;
            }
            return null;
        };

        /**
         * Creates a CrashReport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof plcrash.CrashReport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {plcrash.CrashReport} CrashReport
         */
        CrashReport.fromObject = function fromObject(object) {
            if (object instanceof $root.plcrash.CrashReport)
                return object;
            var message = new $root.plcrash.CrashReport();
            if (object.systemInfo != null) {
                if (typeof object.systemInfo !== "object")
                    throw TypeError(".plcrash.CrashReport.systemInfo: object expected");
                message.systemInfo = $root.plcrash.CrashReport.SystemInfo.fromObject(object.systemInfo);
            }
            if (object.applicationInfo != null) {
                if (typeof object.applicationInfo !== "object")
                    throw TypeError(".plcrash.CrashReport.applicationInfo: object expected");
                message.applicationInfo = $root.plcrash.CrashReport.ApplicationInfo.fromObject(object.applicationInfo);
            }
            if (object.threads) {
                if (!Array.isArray(object.threads))
                    throw TypeError(".plcrash.CrashReport.threads: array expected");
                message.threads = [];
                for (var i = 0; i < object.threads.length; ++i) {
                    if (typeof object.threads[i] !== "object")
                        throw TypeError(".plcrash.CrashReport.threads: object expected");
                    message.threads[i] = $root.plcrash.CrashReport.Thread.fromObject(object.threads[i]);
                }
            }
            if (object.binaryImages) {
                if (!Array.isArray(object.binaryImages))
                    throw TypeError(".plcrash.CrashReport.binaryImages: array expected");
                message.binaryImages = [];
                for (var i = 0; i < object.binaryImages.length; ++i) {
                    if (typeof object.binaryImages[i] !== "object")
                        throw TypeError(".plcrash.CrashReport.binaryImages: object expected");
                    message.binaryImages[i] = $root.plcrash.CrashReport.BinaryImage.fromObject(object.binaryImages[i]);
                }
            }
            if (object.exception != null) {
                if (typeof object.exception !== "object")
                    throw TypeError(".plcrash.CrashReport.exception: object expected");
                message.exception = $root.plcrash.CrashReport.Exception.fromObject(object.exception);
            }
            if (object.signal != null) {
                if (typeof object.signal !== "object")
                    throw TypeError(".plcrash.CrashReport.signal: object expected");
                message.signal = $root.plcrash.CrashReport.Signal.fromObject(object.signal);
            }
            if (object.processInfo != null) {
                if (typeof object.processInfo !== "object")
                    throw TypeError(".plcrash.CrashReport.processInfo: object expected");
                message.processInfo = $root.plcrash.CrashReport.ProcessInfo.fromObject(object.processInfo);
            }
            if (object.machineInfo != null) {
                if (typeof object.machineInfo !== "object")
                    throw TypeError(".plcrash.CrashReport.machineInfo: object expected");
                message.machineInfo = $root.plcrash.CrashReport.MachineInfo.fromObject(object.machineInfo);
            }
            if (object.reportInfo != null) {
                if (typeof object.reportInfo !== "object")
                    throw TypeError(".plcrash.CrashReport.reportInfo: object expected");
                message.reportInfo = $root.plcrash.CrashReport.ReportInfo.fromObject(object.reportInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a CrashReport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof plcrash.CrashReport
         * @static
         * @param {plcrash.CrashReport} message CrashReport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CrashReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.threads = [];
                object.binaryImages = [];
            }
            if (options.defaults) {
                object.systemInfo = null;
                object.applicationInfo = null;
                object.exception = null;
                object.signal = null;
                object.processInfo = null;
                object.machineInfo = null;
                object.reportInfo = null;
            }
            if (message.systemInfo != null && message.hasOwnProperty("systemInfo"))
                object.systemInfo = $root.plcrash.CrashReport.SystemInfo.toObject(message.systemInfo, options);
            if (message.applicationInfo != null && message.hasOwnProperty("applicationInfo"))
                object.applicationInfo = $root.plcrash.CrashReport.ApplicationInfo.toObject(message.applicationInfo, options);
            if (message.threads && message.threads.length) {
                object.threads = [];
                for (var j = 0; j < message.threads.length; ++j)
                    object.threads[j] = $root.plcrash.CrashReport.Thread.toObject(message.threads[j], options);
            }
            if (message.binaryImages && message.binaryImages.length) {
                object.binaryImages = [];
                for (var j = 0; j < message.binaryImages.length; ++j)
                    object.binaryImages[j] = $root.plcrash.CrashReport.BinaryImage.toObject(message.binaryImages[j], options);
            }
            if (message.exception != null && message.hasOwnProperty("exception"))
                object.exception = $root.plcrash.CrashReport.Exception.toObject(message.exception, options);
            if (message.signal != null && message.hasOwnProperty("signal"))
                object.signal = $root.plcrash.CrashReport.Signal.toObject(message.signal, options);
            if (message.processInfo != null && message.hasOwnProperty("processInfo"))
                object.processInfo = $root.plcrash.CrashReport.ProcessInfo.toObject(message.processInfo, options);
            if (message.machineInfo != null && message.hasOwnProperty("machineInfo"))
                object.machineInfo = $root.plcrash.CrashReport.MachineInfo.toObject(message.machineInfo, options);
            if (message.reportInfo != null && message.hasOwnProperty("reportInfo"))
                object.reportInfo = $root.plcrash.CrashReport.ReportInfo.toObject(message.reportInfo, options);
            return object;
        };

        /**
         * Converts this CrashReport to JSON.
         * @function toJSON
         * @memberof plcrash.CrashReport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CrashReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CrashReport.Processor = (function() {

            /**
             * Properties of a Processor.
             * @memberof plcrash.CrashReport
             * @interface IProcessor
             * @property {plcrash.CrashReport.Processor.TypeEncoding|null} [encoding] The CPU type encoding that should be used to interpret cpu_type and cpu_subtype. This value is required.
             * @property {number|Long} type The CPU type.
             * @property {number|Long} subtype The CPU subtype.
             */

            /**
             * Constructs a new Processor.
             * @memberof plcrash.CrashReport
             * @classdesc Represents a Processor.
             * @implements IProcessor
             * @constructor
             * @param {plcrash.CrashReport.IProcessor=} [properties] Properties to set
             */
            function Processor(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The CPU type encoding that should be used to interpret cpu_type and cpu_subtype. This value is required.
             * @member {plcrash.CrashReport.Processor.TypeEncoding} encoding
             * @memberof plcrash.CrashReport.Processor
             * @instance
             */
            Processor.prototype.encoding = 0;

            /**
             * The CPU type.
             * @member {number|Long} type
             * @memberof plcrash.CrashReport.Processor
             * @instance
             */
            Processor.prototype.type = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * The CPU subtype.
             * @member {number|Long} subtype
             * @memberof plcrash.CrashReport.Processor
             * @instance
             */
            Processor.prototype.subtype = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new Processor instance using the specified properties.
             * @function create
             * @memberof plcrash.CrashReport.Processor
             * @static
             * @param {plcrash.CrashReport.IProcessor=} [properties] Properties to set
             * @returns {plcrash.CrashReport.Processor} Processor instance
             */
            Processor.create = function create(properties) {
                return new Processor(properties);
            };

            /**
             * Encodes the specified Processor message. Does not implicitly {@link plcrash.CrashReport.Processor.verify|verify} messages.
             * @function encode
             * @memberof plcrash.CrashReport.Processor
             * @static
             * @param {plcrash.CrashReport.IProcessor} message Processor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Processor.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.encoding != null && message.hasOwnProperty("encoding"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.encoding);
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.type);
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.subtype);
                return writer;
            };

            /**
             * Encodes the specified Processor message, length delimited. Does not implicitly {@link plcrash.CrashReport.Processor.verify|verify} messages.
             * @function encodeDelimited
             * @memberof plcrash.CrashReport.Processor
             * @static
             * @param {plcrash.CrashReport.IProcessor} message Processor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Processor.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Processor message from the specified reader or buffer.
             * @function decode
             * @memberof plcrash.CrashReport.Processor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {plcrash.CrashReport.Processor} Processor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Processor.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.Processor();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.encoding = reader.int32();
                        break;
                    case 2:
                        message.type = reader.uint64();
                        break;
                    case 3:
                        message.subtype = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                if (!message.hasOwnProperty("subtype"))
                    throw $util.ProtocolError("missing required 'subtype'", { instance: message });
                return message;
            };

            /**
             * Decodes a Processor message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof plcrash.CrashReport.Processor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {plcrash.CrashReport.Processor} Processor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Processor.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Processor message.
             * @function verify
             * @memberof plcrash.CrashReport.Processor
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Processor.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.encoding != null && message.hasOwnProperty("encoding"))
                    switch (message.encoding) {
                    default:
                        return "encoding: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (!$util.isInteger(message.type) && !(message.type && $util.isInteger(message.type.low) && $util.isInteger(message.type.high)))
                    return "type: integer|Long expected";
                if (!$util.isInteger(message.subtype) && !(message.subtype && $util.isInteger(message.subtype.low) && $util.isInteger(message.subtype.high)))
                    return "subtype: integer|Long expected";
                return null;
            };

            /**
             * Creates a Processor message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof plcrash.CrashReport.Processor
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {plcrash.CrashReport.Processor} Processor
             */
            Processor.fromObject = function fromObject(object) {
                if (object instanceof $root.plcrash.CrashReport.Processor)
                    return object;
                var message = new $root.plcrash.CrashReport.Processor();
                switch (object.encoding) {
                case "TYPE_ENCODING_UNKNOWN":
                case 0:
                    message.encoding = 0;
                    break;
                case "TYPE_ENCODING_MACH":
                case 1:
                    message.encoding = 1;
                    break;
                }
                if (object.type != null)
                    if ($util.Long)
                        (message.type = $util.Long.fromValue(object.type)).unsigned = true;
                    else if (typeof object.type === "string")
                        message.type = parseInt(object.type, 10);
                    else if (typeof object.type === "number")
                        message.type = object.type;
                    else if (typeof object.type === "object")
                        message.type = new $util.LongBits(object.type.low >>> 0, object.type.high >>> 0).toNumber(true);
                if (object.subtype != null)
                    if ($util.Long)
                        (message.subtype = $util.Long.fromValue(object.subtype)).unsigned = true;
                    else if (typeof object.subtype === "string")
                        message.subtype = parseInt(object.subtype, 10);
                    else if (typeof object.subtype === "number")
                        message.subtype = object.subtype;
                    else if (typeof object.subtype === "object")
                        message.subtype = new $util.LongBits(object.subtype.low >>> 0, object.subtype.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a Processor message. Also converts values to other types if specified.
             * @function toObject
             * @memberof plcrash.CrashReport.Processor
             * @static
             * @param {plcrash.CrashReport.Processor} message Processor
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Processor.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.encoding = options.enums === String ? "TYPE_ENCODING_UNKNOWN" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.type = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.type = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.subtype = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.subtype = options.longs === String ? "0" : 0;
                }
                if (message.encoding != null && message.hasOwnProperty("encoding"))
                    object.encoding = options.enums === String ? $root.plcrash.CrashReport.Processor.TypeEncoding[message.encoding] : message.encoding;
                if (message.type != null && message.hasOwnProperty("type"))
                    if (typeof message.type === "number")
                        object.type = options.longs === String ? String(message.type) : message.type;
                    else
                        object.type = options.longs === String ? $util.Long.prototype.toString.call(message.type) : options.longs === Number ? new $util.LongBits(message.type.low >>> 0, message.type.high >>> 0).toNumber(true) : message.type;
                if (message.subtype != null && message.hasOwnProperty("subtype"))
                    if (typeof message.subtype === "number")
                        object.subtype = options.longs === String ? String(message.subtype) : message.subtype;
                    else
                        object.subtype = options.longs === String ? $util.Long.prototype.toString.call(message.subtype) : options.longs === Number ? new $util.LongBits(message.subtype.low >>> 0, message.subtype.high >>> 0).toNumber(true) : message.subtype;
                return object;
            };

            /**
             * Converts this Processor to JSON.
             * @function toJSON
             * @memberof plcrash.CrashReport.Processor
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Processor.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * TypeEncoding enum.
             * @name plcrash.CrashReport.Processor.TypeEncoding
             * @enum {string}
             * @property {number} TYPE_ENCODING_UNKNOWN=0 TYPE_ENCODING_UNKNOWN value
             * @property {number} TYPE_ENCODING_MACH=1 TYPE_ENCODING_MACH value
             */
            Processor.TypeEncoding = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "TYPE_ENCODING_UNKNOWN"] = 0;
                values[valuesById[1] = "TYPE_ENCODING_MACH"] = 1;
                return values;
            })();

            return Processor;
        })();

        CrashReport.SystemInfo = (function() {

            /**
             * Properties of a SystemInfo.
             * @memberof plcrash.CrashReport
             * @interface ISystemInfo
             * @property {plcrash.CrashReport.SystemInfo.OperatingSystem|null} [operatingSystem] SystemInfo operatingSystem
             * @property {string} osVersion SystemInfo osVersion
             * @property {plcrash.Architecture} architecture SystemInfo architecture
             * @property {number|Long} timestamp SystemInfo timestamp
             * @property {string|null} [osBuild] SystemInfo osBuild
             */

            /**
             * Constructs a new SystemInfo.
             * @memberof plcrash.CrashReport
             * @classdesc Represents a SystemInfo.
             * @implements ISystemInfo
             * @constructor
             * @param {plcrash.CrashReport.ISystemInfo=} [properties] Properties to set
             */
            function SystemInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SystemInfo operatingSystem.
             * @member {plcrash.CrashReport.SystemInfo.OperatingSystem} operatingSystem
             * @memberof plcrash.CrashReport.SystemInfo
             * @instance
             */
            SystemInfo.prototype.operatingSystem = 3;

            /**
             * SystemInfo osVersion.
             * @member {string} osVersion
             * @memberof plcrash.CrashReport.SystemInfo
             * @instance
             */
            SystemInfo.prototype.osVersion = "";

            /**
             * SystemInfo architecture.
             * @member {plcrash.Architecture} architecture
             * @memberof plcrash.CrashReport.SystemInfo
             * @instance
             */
            SystemInfo.prototype.architecture = 6;

            /**
             * SystemInfo timestamp.
             * @member {number|Long} timestamp
             * @memberof plcrash.CrashReport.SystemInfo
             * @instance
             */
            SystemInfo.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SystemInfo osBuild.
             * @member {string} osBuild
             * @memberof plcrash.CrashReport.SystemInfo
             * @instance
             */
            SystemInfo.prototype.osBuild = "";

            /**
             * Creates a new SystemInfo instance using the specified properties.
             * @function create
             * @memberof plcrash.CrashReport.SystemInfo
             * @static
             * @param {plcrash.CrashReport.ISystemInfo=} [properties] Properties to set
             * @returns {plcrash.CrashReport.SystemInfo} SystemInfo instance
             */
            SystemInfo.create = function create(properties) {
                return new SystemInfo(properties);
            };

            /**
             * Encodes the specified SystemInfo message. Does not implicitly {@link plcrash.CrashReport.SystemInfo.verify|verify} messages.
             * @function encode
             * @memberof plcrash.CrashReport.SystemInfo
             * @static
             * @param {plcrash.CrashReport.ISystemInfo} message SystemInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SystemInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.operatingSystem != null && message.hasOwnProperty("operatingSystem"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operatingSystem);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.osVersion);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.architecture);
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp);
                if (message.osBuild != null && message.hasOwnProperty("osBuild"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.osBuild);
                return writer;
            };

            /**
             * Encodes the specified SystemInfo message, length delimited. Does not implicitly {@link plcrash.CrashReport.SystemInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof plcrash.CrashReport.SystemInfo
             * @static
             * @param {plcrash.CrashReport.ISystemInfo} message SystemInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SystemInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SystemInfo message from the specified reader or buffer.
             * @function decode
             * @memberof plcrash.CrashReport.SystemInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {plcrash.CrashReport.SystemInfo} SystemInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SystemInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.SystemInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.operatingSystem = reader.int32();
                        break;
                    case 2:
                        message.osVersion = reader.string();
                        break;
                    case 3:
                        message.architecture = reader.int32();
                        break;
                    case 4:
                        message.timestamp = reader.int64();
                        break;
                    case 5:
                        message.osBuild = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("osVersion"))
                    throw $util.ProtocolError("missing required 'osVersion'", { instance: message });
                if (!message.hasOwnProperty("architecture"))
                    throw $util.ProtocolError("missing required 'architecture'", { instance: message });
                if (!message.hasOwnProperty("timestamp"))
                    throw $util.ProtocolError("missing required 'timestamp'", { instance: message });
                return message;
            };

            /**
             * Decodes a SystemInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof plcrash.CrashReport.SystemInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {plcrash.CrashReport.SystemInfo} SystemInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SystemInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SystemInfo message.
             * @function verify
             * @memberof plcrash.CrashReport.SystemInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SystemInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.operatingSystem != null && message.hasOwnProperty("operatingSystem"))
                    switch (message.operatingSystem) {
                    default:
                        return "operatingSystem: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (!$util.isString(message.osVersion))
                    return "osVersion: string expected";
                switch (message.architecture) {
                default:
                    return "architecture: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
                if (message.osBuild != null && message.hasOwnProperty("osBuild"))
                    if (!$util.isString(message.osBuild))
                        return "osBuild: string expected";
                return null;
            };

            /**
             * Creates a SystemInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof plcrash.CrashReport.SystemInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {plcrash.CrashReport.SystemInfo} SystemInfo
             */
            SystemInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.plcrash.CrashReport.SystemInfo)
                    return object;
                var message = new $root.plcrash.CrashReport.SystemInfo();
                switch (object.operatingSystem) {
                case "MAC_OS_X":
                case 0:
                    message.operatingSystem = 0;
                    break;
                case "IPHONE_OS":
                case 1:
                    message.operatingSystem = 1;
                    break;
                case "IPHONE_SIMULATOR":
                case 2:
                    message.operatingSystem = 2;
                    break;
                case "OS_UNKNOWN":
                case 3:
                    message.operatingSystem = 3;
                    break;
                }
                if (object.osVersion != null)
                    message.osVersion = String(object.osVersion);
                switch (object.architecture) {
                case "X86_32":
                case 0:
                    message.architecture = 0;
                    break;
                case "X86_64":
                case 1:
                    message.architecture = 1;
                    break;
                case "ARMV6":
                case 2:
                    message.architecture = 2;
                    break;
                case "PPC":
                case 3:
                    message.architecture = 3;
                    break;
                case "PPC64":
                case 4:
                    message.architecture = 4;
                    break;
                case "ARMV7":
                case 5:
                    message.architecture = 5;
                    break;
                case "ARCHITECTURE_UNKNOWN":
                case 6:
                    message.architecture = 6;
                    break;
                }
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                if (object.osBuild != null)
                    message.osBuild = String(object.osBuild);
                return message;
            };

            /**
             * Creates a plain object from a SystemInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof plcrash.CrashReport.SystemInfo
             * @static
             * @param {plcrash.CrashReport.SystemInfo} message SystemInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SystemInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.operatingSystem = options.enums === String ? "OS_UNKNOWN" : 3;
                    object.osVersion = "";
                    object.architecture = options.enums === String ? "ARCHITECTURE_UNKNOWN" : 6;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                    object.osBuild = "";
                }
                if (message.operatingSystem != null && message.hasOwnProperty("operatingSystem"))
                    object.operatingSystem = options.enums === String ? $root.plcrash.CrashReport.SystemInfo.OperatingSystem[message.operatingSystem] : message.operatingSystem;
                if (message.osVersion != null && message.hasOwnProperty("osVersion"))
                    object.osVersion = message.osVersion;
                if (message.architecture != null && message.hasOwnProperty("architecture"))
                    object.architecture = options.enums === String ? $root.plcrash.Architecture[message.architecture] : message.architecture;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                if (message.osBuild != null && message.hasOwnProperty("osBuild"))
                    object.osBuild = message.osBuild;
                return object;
            };

            /**
             * Converts this SystemInfo to JSON.
             * @function toJSON
             * @memberof plcrash.CrashReport.SystemInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SystemInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * OperatingSystem enum.
             * @name plcrash.CrashReport.SystemInfo.OperatingSystem
             * @enum {string}
             * @property {number} MAC_OS_X=0 MAC_OS_X value
             * @property {number} IPHONE_OS=1 IPHONE_OS value
             * @property {number} IPHONE_SIMULATOR=2 IPHONE_SIMULATOR value
             * @property {number} OS_UNKNOWN=3 OS_UNKNOWN value
             */
            SystemInfo.OperatingSystem = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MAC_OS_X"] = 0;
                values[valuesById[1] = "IPHONE_OS"] = 1;
                values[valuesById[2] = "IPHONE_SIMULATOR"] = 2;
                values[valuesById[3] = "OS_UNKNOWN"] = 3;
                return values;
            })();

            return SystemInfo;
        })();

        CrashReport.ApplicationInfo = (function() {

            /**
             * Properties of an ApplicationInfo.
             * @memberof plcrash.CrashReport
             * @interface IApplicationInfo
             * @property {string} identifier ApplicationInfo identifier
             * @property {string} version ApplicationInfo version
             * @property {string|null} [marketingVersion] ApplicationInfo marketingVersion
             */

            /**
             * Constructs a new ApplicationInfo.
             * @memberof plcrash.CrashReport
             * @classdesc Represents an ApplicationInfo.
             * @implements IApplicationInfo
             * @constructor
             * @param {plcrash.CrashReport.IApplicationInfo=} [properties] Properties to set
             */
            function ApplicationInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApplicationInfo identifier.
             * @member {string} identifier
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @instance
             */
            ApplicationInfo.prototype.identifier = "";

            /**
             * ApplicationInfo version.
             * @member {string} version
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @instance
             */
            ApplicationInfo.prototype.version = "";

            /**
             * ApplicationInfo marketingVersion.
             * @member {string} marketingVersion
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @instance
             */
            ApplicationInfo.prototype.marketingVersion = "";

            /**
             * Creates a new ApplicationInfo instance using the specified properties.
             * @function create
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @static
             * @param {plcrash.CrashReport.IApplicationInfo=} [properties] Properties to set
             * @returns {plcrash.CrashReport.ApplicationInfo} ApplicationInfo instance
             */
            ApplicationInfo.create = function create(properties) {
                return new ApplicationInfo(properties);
            };

            /**
             * Encodes the specified ApplicationInfo message. Does not implicitly {@link plcrash.CrashReport.ApplicationInfo.verify|verify} messages.
             * @function encode
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @static
             * @param {plcrash.CrashReport.IApplicationInfo} message ApplicationInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplicationInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.identifier);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.marketingVersion != null && message.hasOwnProperty("marketingVersion"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.marketingVersion);
                return writer;
            };

            /**
             * Encodes the specified ApplicationInfo message, length delimited. Does not implicitly {@link plcrash.CrashReport.ApplicationInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @static
             * @param {plcrash.CrashReport.IApplicationInfo} message ApplicationInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplicationInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApplicationInfo message from the specified reader or buffer.
             * @function decode
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {plcrash.CrashReport.ApplicationInfo} ApplicationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplicationInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.ApplicationInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.identifier = reader.string();
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.marketingVersion = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("identifier"))
                    throw $util.ProtocolError("missing required 'identifier'", { instance: message });
                if (!message.hasOwnProperty("version"))
                    throw $util.ProtocolError("missing required 'version'", { instance: message });
                return message;
            };

            /**
             * Decodes an ApplicationInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {plcrash.CrashReport.ApplicationInfo} ApplicationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplicationInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApplicationInfo message.
             * @function verify
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApplicationInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.identifier))
                    return "identifier: string expected";
                if (!$util.isString(message.version))
                    return "version: string expected";
                if (message.marketingVersion != null && message.hasOwnProperty("marketingVersion"))
                    if (!$util.isString(message.marketingVersion))
                        return "marketingVersion: string expected";
                return null;
            };

            /**
             * Creates an ApplicationInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {plcrash.CrashReport.ApplicationInfo} ApplicationInfo
             */
            ApplicationInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.plcrash.CrashReport.ApplicationInfo)
                    return object;
                var message = new $root.plcrash.CrashReport.ApplicationInfo();
                if (object.identifier != null)
                    message.identifier = String(object.identifier);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.marketingVersion != null)
                    message.marketingVersion = String(object.marketingVersion);
                return message;
            };

            /**
             * Creates a plain object from an ApplicationInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @static
             * @param {plcrash.CrashReport.ApplicationInfo} message ApplicationInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApplicationInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.identifier = "";
                    object.version = "";
                    object.marketingVersion = "";
                }
                if (message.identifier != null && message.hasOwnProperty("identifier"))
                    object.identifier = message.identifier;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.marketingVersion != null && message.hasOwnProperty("marketingVersion"))
                    object.marketingVersion = message.marketingVersion;
                return object;
            };

            /**
             * Converts this ApplicationInfo to JSON.
             * @function toJSON
             * @memberof plcrash.CrashReport.ApplicationInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApplicationInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ApplicationInfo;
        })();

        CrashReport.Symbol = (function() {

            /**
             * Properties of a Symbol.
             * @memberof plcrash.CrashReport
             * @interface ISymbol
             * @property {string} name Symbol name
             * @property {number|Long} startAddress Symbol startAddress
             * @property {number|Long|null} [endAddress] Symbol endAddress
             */

            /**
             * Constructs a new Symbol.
             * @memberof plcrash.CrashReport
             * @classdesc Represents a Symbol.
             * @implements ISymbol
             * @constructor
             * @param {plcrash.CrashReport.ISymbol=} [properties] Properties to set
             */
            function Symbol(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Symbol name.
             * @member {string} name
             * @memberof plcrash.CrashReport.Symbol
             * @instance
             */
            Symbol.prototype.name = "";

            /**
             * Symbol startAddress.
             * @member {number|Long} startAddress
             * @memberof plcrash.CrashReport.Symbol
             * @instance
             */
            Symbol.prototype.startAddress = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Symbol endAddress.
             * @member {number|Long} endAddress
             * @memberof plcrash.CrashReport.Symbol
             * @instance
             */
            Symbol.prototype.endAddress = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new Symbol instance using the specified properties.
             * @function create
             * @memberof plcrash.CrashReport.Symbol
             * @static
             * @param {plcrash.CrashReport.ISymbol=} [properties] Properties to set
             * @returns {plcrash.CrashReport.Symbol} Symbol instance
             */
            Symbol.create = function create(properties) {
                return new Symbol(properties);
            };

            /**
             * Encodes the specified Symbol message. Does not implicitly {@link plcrash.CrashReport.Symbol.verify|verify} messages.
             * @function encode
             * @memberof plcrash.CrashReport.Symbol
             * @static
             * @param {plcrash.CrashReport.ISymbol} message Symbol message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Symbol.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.startAddress);
                if (message.endAddress != null && message.hasOwnProperty("endAddress"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.endAddress);
                return writer;
            };

            /**
             * Encodes the specified Symbol message, length delimited. Does not implicitly {@link plcrash.CrashReport.Symbol.verify|verify} messages.
             * @function encodeDelimited
             * @memberof plcrash.CrashReport.Symbol
             * @static
             * @param {plcrash.CrashReport.ISymbol} message Symbol message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Symbol.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Symbol message from the specified reader or buffer.
             * @function decode
             * @memberof plcrash.CrashReport.Symbol
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {plcrash.CrashReport.Symbol} Symbol
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Symbol.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.Symbol();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.startAddress = reader.uint64();
                        break;
                    case 3:
                        message.endAddress = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("startAddress"))
                    throw $util.ProtocolError("missing required 'startAddress'", { instance: message });
                return message;
            };

            /**
             * Decodes a Symbol message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof plcrash.CrashReport.Symbol
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {plcrash.CrashReport.Symbol} Symbol
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Symbol.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Symbol message.
             * @function verify
             * @memberof plcrash.CrashReport.Symbol
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Symbol.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (!$util.isInteger(message.startAddress) && !(message.startAddress && $util.isInteger(message.startAddress.low) && $util.isInteger(message.startAddress.high)))
                    return "startAddress: integer|Long expected";
                if (message.endAddress != null && message.hasOwnProperty("endAddress"))
                    if (!$util.isInteger(message.endAddress) && !(message.endAddress && $util.isInteger(message.endAddress.low) && $util.isInteger(message.endAddress.high)))
                        return "endAddress: integer|Long expected";
                return null;
            };

            /**
             * Creates a Symbol message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof plcrash.CrashReport.Symbol
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {plcrash.CrashReport.Symbol} Symbol
             */
            Symbol.fromObject = function fromObject(object) {
                if (object instanceof $root.plcrash.CrashReport.Symbol)
                    return object;
                var message = new $root.plcrash.CrashReport.Symbol();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.startAddress != null)
                    if ($util.Long)
                        (message.startAddress = $util.Long.fromValue(object.startAddress)).unsigned = true;
                    else if (typeof object.startAddress === "string")
                        message.startAddress = parseInt(object.startAddress, 10);
                    else if (typeof object.startAddress === "number")
                        message.startAddress = object.startAddress;
                    else if (typeof object.startAddress === "object")
                        message.startAddress = new $util.LongBits(object.startAddress.low >>> 0, object.startAddress.high >>> 0).toNumber(true);
                if (object.endAddress != null)
                    if ($util.Long)
                        (message.endAddress = $util.Long.fromValue(object.endAddress)).unsigned = true;
                    else if (typeof object.endAddress === "string")
                        message.endAddress = parseInt(object.endAddress, 10);
                    else if (typeof object.endAddress === "number")
                        message.endAddress = object.endAddress;
                    else if (typeof object.endAddress === "object")
                        message.endAddress = new $util.LongBits(object.endAddress.low >>> 0, object.endAddress.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a Symbol message. Also converts values to other types if specified.
             * @function toObject
             * @memberof plcrash.CrashReport.Symbol
             * @static
             * @param {plcrash.CrashReport.Symbol} message Symbol
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Symbol.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.startAddress = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.startAddress = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.endAddress = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.endAddress = options.longs === String ? "0" : 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.startAddress != null && message.hasOwnProperty("startAddress"))
                    if (typeof message.startAddress === "number")
                        object.startAddress = options.longs === String ? String(message.startAddress) : message.startAddress;
                    else
                        object.startAddress = options.longs === String ? $util.Long.prototype.toString.call(message.startAddress) : options.longs === Number ? new $util.LongBits(message.startAddress.low >>> 0, message.startAddress.high >>> 0).toNumber(true) : message.startAddress;
                if (message.endAddress != null && message.hasOwnProperty("endAddress"))
                    if (typeof message.endAddress === "number")
                        object.endAddress = options.longs === String ? String(message.endAddress) : message.endAddress;
                    else
                        object.endAddress = options.longs === String ? $util.Long.prototype.toString.call(message.endAddress) : options.longs === Number ? new $util.LongBits(message.endAddress.low >>> 0, message.endAddress.high >>> 0).toNumber(true) : message.endAddress;
                return object;
            };

            /**
             * Converts this Symbol to JSON.
             * @function toJSON
             * @memberof plcrash.CrashReport.Symbol
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Symbol.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Symbol;
        })();

        CrashReport.Thread = (function() {

            /**
             * Properties of a Thread.
             * @memberof plcrash.CrashReport
             * @interface IThread
             * @property {number} threadNumber Thread threadNumber
             * @property {Array.<plcrash.CrashReport.Thread.IStackFrame>|null} [frames] Thread frames
             * @property {boolean} crashed Thread crashed
             * @property {Array.<plcrash.CrashReport.Thread.IRegisterValue>|null} [registers] Thread registers
             */

            /**
             * Constructs a new Thread.
             * @memberof plcrash.CrashReport
             * @classdesc Represents a Thread.
             * @implements IThread
             * @constructor
             * @param {plcrash.CrashReport.IThread=} [properties] Properties to set
             */
            function Thread(properties) {
                this.frames = [];
                this.registers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Thread threadNumber.
             * @member {number} threadNumber
             * @memberof plcrash.CrashReport.Thread
             * @instance
             */
            Thread.prototype.threadNumber = 0;

            /**
             * Thread frames.
             * @member {Array.<plcrash.CrashReport.Thread.IStackFrame>} frames
             * @memberof plcrash.CrashReport.Thread
             * @instance
             */
            Thread.prototype.frames = $util.emptyArray;

            /**
             * Thread crashed.
             * @member {boolean} crashed
             * @memberof plcrash.CrashReport.Thread
             * @instance
             */
            Thread.prototype.crashed = false;

            /**
             * Thread registers.
             * @member {Array.<plcrash.CrashReport.Thread.IRegisterValue>} registers
             * @memberof plcrash.CrashReport.Thread
             * @instance
             */
            Thread.prototype.registers = $util.emptyArray;

            /**
             * Creates a new Thread instance using the specified properties.
             * @function create
             * @memberof plcrash.CrashReport.Thread
             * @static
             * @param {plcrash.CrashReport.IThread=} [properties] Properties to set
             * @returns {plcrash.CrashReport.Thread} Thread instance
             */
            Thread.create = function create(properties) {
                return new Thread(properties);
            };

            /**
             * Encodes the specified Thread message. Does not implicitly {@link plcrash.CrashReport.Thread.verify|verify} messages.
             * @function encode
             * @memberof plcrash.CrashReport.Thread
             * @static
             * @param {plcrash.CrashReport.IThread} message Thread message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Thread.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.threadNumber);
                if (message.frames != null && message.frames.length)
                    for (var i = 0; i < message.frames.length; ++i)
                        $root.plcrash.CrashReport.Thread.StackFrame.encode(message.frames[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.crashed);
                if (message.registers != null && message.registers.length)
                    for (var i = 0; i < message.registers.length; ++i)
                        $root.plcrash.CrashReport.Thread.RegisterValue.encode(message.registers[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Thread message, length delimited. Does not implicitly {@link plcrash.CrashReport.Thread.verify|verify} messages.
             * @function encodeDelimited
             * @memberof plcrash.CrashReport.Thread
             * @static
             * @param {plcrash.CrashReport.IThread} message Thread message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Thread.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Thread message from the specified reader or buffer.
             * @function decode
             * @memberof plcrash.CrashReport.Thread
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {plcrash.CrashReport.Thread} Thread
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Thread.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.Thread();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.threadNumber = reader.uint32();
                        break;
                    case 2:
                        if (!(message.frames && message.frames.length))
                            message.frames = [];
                        message.frames.push($root.plcrash.CrashReport.Thread.StackFrame.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.crashed = reader.bool();
                        break;
                    case 4:
                        if (!(message.registers && message.registers.length))
                            message.registers = [];
                        message.registers.push($root.plcrash.CrashReport.Thread.RegisterValue.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("threadNumber"))
                    throw $util.ProtocolError("missing required 'threadNumber'", { instance: message });
                if (!message.hasOwnProperty("crashed"))
                    throw $util.ProtocolError("missing required 'crashed'", { instance: message });
                return message;
            };

            /**
             * Decodes a Thread message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof plcrash.CrashReport.Thread
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {plcrash.CrashReport.Thread} Thread
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Thread.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Thread message.
             * @function verify
             * @memberof plcrash.CrashReport.Thread
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Thread.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.threadNumber))
                    return "threadNumber: integer expected";
                if (message.frames != null && message.hasOwnProperty("frames")) {
                    if (!Array.isArray(message.frames))
                        return "frames: array expected";
                    for (var i = 0; i < message.frames.length; ++i) {
                        var error = $root.plcrash.CrashReport.Thread.StackFrame.verify(message.frames[i]);
                        if (error)
                            return "frames." + error;
                    }
                }
                if (typeof message.crashed !== "boolean")
                    return "crashed: boolean expected";
                if (message.registers != null && message.hasOwnProperty("registers")) {
                    if (!Array.isArray(message.registers))
                        return "registers: array expected";
                    for (var i = 0; i < message.registers.length; ++i) {
                        var error = $root.plcrash.CrashReport.Thread.RegisterValue.verify(message.registers[i]);
                        if (error)
                            return "registers." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Thread message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof plcrash.CrashReport.Thread
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {plcrash.CrashReport.Thread} Thread
             */
            Thread.fromObject = function fromObject(object) {
                if (object instanceof $root.plcrash.CrashReport.Thread)
                    return object;
                var message = new $root.plcrash.CrashReport.Thread();
                if (object.threadNumber != null)
                    message.threadNumber = object.threadNumber >>> 0;
                if (object.frames) {
                    if (!Array.isArray(object.frames))
                        throw TypeError(".plcrash.CrashReport.Thread.frames: array expected");
                    message.frames = [];
                    for (var i = 0; i < object.frames.length; ++i) {
                        if (typeof object.frames[i] !== "object")
                            throw TypeError(".plcrash.CrashReport.Thread.frames: object expected");
                        message.frames[i] = $root.plcrash.CrashReport.Thread.StackFrame.fromObject(object.frames[i]);
                    }
                }
                if (object.crashed != null)
                    message.crashed = Boolean(object.crashed);
                if (object.registers) {
                    if (!Array.isArray(object.registers))
                        throw TypeError(".plcrash.CrashReport.Thread.registers: array expected");
                    message.registers = [];
                    for (var i = 0; i < object.registers.length; ++i) {
                        if (typeof object.registers[i] !== "object")
                            throw TypeError(".plcrash.CrashReport.Thread.registers: object expected");
                        message.registers[i] = $root.plcrash.CrashReport.Thread.RegisterValue.fromObject(object.registers[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Thread message. Also converts values to other types if specified.
             * @function toObject
             * @memberof plcrash.CrashReport.Thread
             * @static
             * @param {plcrash.CrashReport.Thread} message Thread
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Thread.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.frames = [];
                    object.registers = [];
                }
                if (options.defaults) {
                    object.threadNumber = 0;
                    object.crashed = false;
                }
                if (message.threadNumber != null && message.hasOwnProperty("threadNumber"))
                    object.threadNumber = message.threadNumber;
                if (message.frames && message.frames.length) {
                    object.frames = [];
                    for (var j = 0; j < message.frames.length; ++j)
                        object.frames[j] = $root.plcrash.CrashReport.Thread.StackFrame.toObject(message.frames[j], options);
                }
                if (message.crashed != null && message.hasOwnProperty("crashed"))
                    object.crashed = message.crashed;
                if (message.registers && message.registers.length) {
                    object.registers = [];
                    for (var j = 0; j < message.registers.length; ++j)
                        object.registers[j] = $root.plcrash.CrashReport.Thread.RegisterValue.toObject(message.registers[j], options);
                }
                return object;
            };

            /**
             * Converts this Thread to JSON.
             * @function toJSON
             * @memberof plcrash.CrashReport.Thread
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Thread.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Thread.StackFrame = (function() {

                /**
                 * Properties of a StackFrame.
                 * @memberof plcrash.CrashReport.Thread
                 * @interface IStackFrame
                 * @property {number|Long} pc StackFrame pc
                 * @property {plcrash.CrashReport.ISymbol|null} [symbol] StackFrame symbol
                 */

                /**
                 * Constructs a new StackFrame.
                 * @memberof plcrash.CrashReport.Thread
                 * @classdesc Represents a StackFrame.
                 * @implements IStackFrame
                 * @constructor
                 * @param {plcrash.CrashReport.Thread.IStackFrame=} [properties] Properties to set
                 */
                function StackFrame(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StackFrame pc.
                 * @member {number|Long} pc
                 * @memberof plcrash.CrashReport.Thread.StackFrame
                 * @instance
                 */
                StackFrame.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * StackFrame symbol.
                 * @member {plcrash.CrashReport.ISymbol|null|undefined} symbol
                 * @memberof plcrash.CrashReport.Thread.StackFrame
                 * @instance
                 */
                StackFrame.prototype.symbol = null;

                /**
                 * Creates a new StackFrame instance using the specified properties.
                 * @function create
                 * @memberof plcrash.CrashReport.Thread.StackFrame
                 * @static
                 * @param {plcrash.CrashReport.Thread.IStackFrame=} [properties] Properties to set
                 * @returns {plcrash.CrashReport.Thread.StackFrame} StackFrame instance
                 */
                StackFrame.create = function create(properties) {
                    return new StackFrame(properties);
                };

                /**
                 * Encodes the specified StackFrame message. Does not implicitly {@link plcrash.CrashReport.Thread.StackFrame.verify|verify} messages.
                 * @function encode
                 * @memberof plcrash.CrashReport.Thread.StackFrame
                 * @static
                 * @param {plcrash.CrashReport.Thread.IStackFrame} message StackFrame message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StackFrame.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.pc);
                    if (message.symbol != null && message.hasOwnProperty("symbol"))
                        $root.plcrash.CrashReport.Symbol.encode(message.symbol, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified StackFrame message, length delimited. Does not implicitly {@link plcrash.CrashReport.Thread.StackFrame.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof plcrash.CrashReport.Thread.StackFrame
                 * @static
                 * @param {plcrash.CrashReport.Thread.IStackFrame} message StackFrame message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StackFrame.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StackFrame message from the specified reader or buffer.
                 * @function decode
                 * @memberof plcrash.CrashReport.Thread.StackFrame
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {plcrash.CrashReport.Thread.StackFrame} StackFrame
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StackFrame.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.Thread.StackFrame();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 3:
                            message.pc = reader.uint64();
                            break;
                        case 6:
                            message.symbol = $root.plcrash.CrashReport.Symbol.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("pc"))
                        throw $util.ProtocolError("missing required 'pc'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a StackFrame message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof plcrash.CrashReport.Thread.StackFrame
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {plcrash.CrashReport.Thread.StackFrame} StackFrame
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StackFrame.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StackFrame message.
                 * @function verify
                 * @memberof plcrash.CrashReport.Thread.StackFrame
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StackFrame.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                        return "pc: integer|Long expected";
                    if (message.symbol != null && message.hasOwnProperty("symbol")) {
                        var error = $root.plcrash.CrashReport.Symbol.verify(message.symbol);
                        if (error)
                            return "symbol." + error;
                    }
                    return null;
                };

                /**
                 * Creates a StackFrame message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof plcrash.CrashReport.Thread.StackFrame
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {plcrash.CrashReport.Thread.StackFrame} StackFrame
                 */
                StackFrame.fromObject = function fromObject(object) {
                    if (object instanceof $root.plcrash.CrashReport.Thread.StackFrame)
                        return object;
                    var message = new $root.plcrash.CrashReport.Thread.StackFrame();
                    if (object.pc != null)
                        if ($util.Long)
                            (message.pc = $util.Long.fromValue(object.pc)).unsigned = true;
                        else if (typeof object.pc === "string")
                            message.pc = parseInt(object.pc, 10);
                        else if (typeof object.pc === "number")
                            message.pc = object.pc;
                        else if (typeof object.pc === "object")
                            message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber(true);
                    if (object.symbol != null) {
                        if (typeof object.symbol !== "object")
                            throw TypeError(".plcrash.CrashReport.Thread.StackFrame.symbol: object expected");
                        message.symbol = $root.plcrash.CrashReport.Symbol.fromObject(object.symbol);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a StackFrame message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof plcrash.CrashReport.Thread.StackFrame
                 * @static
                 * @param {plcrash.CrashReport.Thread.StackFrame} message StackFrame
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StackFrame.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.pc = options.longs === String ? "0" : 0;
                        object.symbol = null;
                    }
                    if (message.pc != null && message.hasOwnProperty("pc"))
                        if (typeof message.pc === "number")
                            object.pc = options.longs === String ? String(message.pc) : message.pc;
                        else
                            object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber(true) : message.pc;
                    if (message.symbol != null && message.hasOwnProperty("symbol"))
                        object.symbol = $root.plcrash.CrashReport.Symbol.toObject(message.symbol, options);
                    return object;
                };

                /**
                 * Converts this StackFrame to JSON.
                 * @function toJSON
                 * @memberof plcrash.CrashReport.Thread.StackFrame
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StackFrame.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return StackFrame;
            })();

            Thread.RegisterValue = (function() {

                /**
                 * Properties of a RegisterValue.
                 * @memberof plcrash.CrashReport.Thread
                 * @interface IRegisterValue
                 * @property {string} name RegisterValue name
                 * @property {number|Long} value RegisterValue value
                 */

                /**
                 * Constructs a new RegisterValue.
                 * @memberof plcrash.CrashReport.Thread
                 * @classdesc Represents a RegisterValue.
                 * @implements IRegisterValue
                 * @constructor
                 * @param {plcrash.CrashReport.Thread.IRegisterValue=} [properties] Properties to set
                 */
                function RegisterValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RegisterValue name.
                 * @member {string} name
                 * @memberof plcrash.CrashReport.Thread.RegisterValue
                 * @instance
                 */
                RegisterValue.prototype.name = "";

                /**
                 * RegisterValue value.
                 * @member {number|Long} value
                 * @memberof plcrash.CrashReport.Thread.RegisterValue
                 * @instance
                 */
                RegisterValue.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Creates a new RegisterValue instance using the specified properties.
                 * @function create
                 * @memberof plcrash.CrashReport.Thread.RegisterValue
                 * @static
                 * @param {plcrash.CrashReport.Thread.IRegisterValue=} [properties] Properties to set
                 * @returns {plcrash.CrashReport.Thread.RegisterValue} RegisterValue instance
                 */
                RegisterValue.create = function create(properties) {
                    return new RegisterValue(properties);
                };

                /**
                 * Encodes the specified RegisterValue message. Does not implicitly {@link plcrash.CrashReport.Thread.RegisterValue.verify|verify} messages.
                 * @function encode
                 * @memberof plcrash.CrashReport.Thread.RegisterValue
                 * @static
                 * @param {plcrash.CrashReport.Thread.IRegisterValue} message RegisterValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RegisterValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.value);
                    return writer;
                };

                /**
                 * Encodes the specified RegisterValue message, length delimited. Does not implicitly {@link plcrash.CrashReport.Thread.RegisterValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof plcrash.CrashReport.Thread.RegisterValue
                 * @static
                 * @param {plcrash.CrashReport.Thread.IRegisterValue} message RegisterValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RegisterValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RegisterValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof plcrash.CrashReport.Thread.RegisterValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {plcrash.CrashReport.Thread.RegisterValue} RegisterValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RegisterValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.Thread.RegisterValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.value = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("name"))
                        throw $util.ProtocolError("missing required 'name'", { instance: message });
                    if (!message.hasOwnProperty("value"))
                        throw $util.ProtocolError("missing required 'value'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a RegisterValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof plcrash.CrashReport.Thread.RegisterValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {plcrash.CrashReport.Thread.RegisterValue} RegisterValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RegisterValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RegisterValue message.
                 * @function verify
                 * @memberof plcrash.CrashReport.Thread.RegisterValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RegisterValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.name))
                        return "name: string expected";
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a RegisterValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof plcrash.CrashReport.Thread.RegisterValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {plcrash.CrashReport.Thread.RegisterValue} RegisterValue
                 */
                RegisterValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.plcrash.CrashReport.Thread.RegisterValue)
                        return object;
                    var message = new $root.plcrash.CrashReport.Thread.RegisterValue();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value != null)
                        if ($util.Long)
                            (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                        else if (typeof object.value === "string")
                            message.value = parseInt(object.value, 10);
                        else if (typeof object.value === "number")
                            message.value = object.value;
                        else if (typeof object.value === "object")
                            message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from a RegisterValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof plcrash.CrashReport.Thread.RegisterValue
                 * @static
                 * @param {plcrash.CrashReport.Thread.RegisterValue} message RegisterValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RegisterValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.value = options.longs === String ? "0" : 0;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value === "number")
                            object.value = options.longs === String ? String(message.value) : message.value;
                        else
                            object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                    return object;
                };

                /**
                 * Converts this RegisterValue to JSON.
                 * @function toJSON
                 * @memberof plcrash.CrashReport.Thread.RegisterValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RegisterValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RegisterValue;
            })();

            return Thread;
        })();

        CrashReport.BinaryImage = (function() {

            /**
             * Properties of a BinaryImage.
             * @memberof plcrash.CrashReport
             * @interface IBinaryImage
             * @property {number|Long} baseAddress BinaryImage baseAddress
             * @property {number|Long} size BinaryImage size
             * @property {string} name BinaryImage name
             * @property {Uint8Array|null} [uuid] BinaryImage uuid
             * @property {plcrash.CrashReport.IProcessor|null} [codeType] BinaryImage codeType
             */

            /**
             * Constructs a new BinaryImage.
             * @memberof plcrash.CrashReport
             * @classdesc Represents a BinaryImage.
             * @implements IBinaryImage
             * @constructor
             * @param {plcrash.CrashReport.IBinaryImage=} [properties] Properties to set
             */
            function BinaryImage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BinaryImage baseAddress.
             * @member {number|Long} baseAddress
             * @memberof plcrash.CrashReport.BinaryImage
             * @instance
             */
            BinaryImage.prototype.baseAddress = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * BinaryImage size.
             * @member {number|Long} size
             * @memberof plcrash.CrashReport.BinaryImage
             * @instance
             */
            BinaryImage.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * BinaryImage name.
             * @member {string} name
             * @memberof plcrash.CrashReport.BinaryImage
             * @instance
             */
            BinaryImage.prototype.name = "";

            /**
             * BinaryImage uuid.
             * @member {Uint8Array} uuid
             * @memberof plcrash.CrashReport.BinaryImage
             * @instance
             */
            BinaryImage.prototype.uuid = $util.newBuffer([]);

            /**
             * BinaryImage codeType.
             * @member {plcrash.CrashReport.IProcessor|null|undefined} codeType
             * @memberof plcrash.CrashReport.BinaryImage
             * @instance
             */
            BinaryImage.prototype.codeType = null;

            /**
             * Creates a new BinaryImage instance using the specified properties.
             * @function create
             * @memberof plcrash.CrashReport.BinaryImage
             * @static
             * @param {plcrash.CrashReport.IBinaryImage=} [properties] Properties to set
             * @returns {plcrash.CrashReport.BinaryImage} BinaryImage instance
             */
            BinaryImage.create = function create(properties) {
                return new BinaryImage(properties);
            };

            /**
             * Encodes the specified BinaryImage message. Does not implicitly {@link plcrash.CrashReport.BinaryImage.verify|verify} messages.
             * @function encode
             * @memberof plcrash.CrashReport.BinaryImage
             * @static
             * @param {plcrash.CrashReport.IBinaryImage} message BinaryImage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BinaryImage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.baseAddress);
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.size);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.uuid);
                if (message.codeType != null && message.hasOwnProperty("codeType"))
                    $root.plcrash.CrashReport.Processor.encode(message.codeType, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BinaryImage message, length delimited. Does not implicitly {@link plcrash.CrashReport.BinaryImage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof plcrash.CrashReport.BinaryImage
             * @static
             * @param {plcrash.CrashReport.IBinaryImage} message BinaryImage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BinaryImage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BinaryImage message from the specified reader or buffer.
             * @function decode
             * @memberof plcrash.CrashReport.BinaryImage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {plcrash.CrashReport.BinaryImage} BinaryImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BinaryImage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.BinaryImage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.baseAddress = reader.uint64();
                        break;
                    case 2:
                        message.size = reader.uint64();
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.uuid = reader.bytes();
                        break;
                    case 5:
                        message.codeType = $root.plcrash.CrashReport.Processor.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("baseAddress"))
                    throw $util.ProtocolError("missing required 'baseAddress'", { instance: message });
                if (!message.hasOwnProperty("size"))
                    throw $util.ProtocolError("missing required 'size'", { instance: message });
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                return message;
            };

            /**
             * Decodes a BinaryImage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof plcrash.CrashReport.BinaryImage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {plcrash.CrashReport.BinaryImage} BinaryImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BinaryImage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BinaryImage message.
             * @function verify
             * @memberof plcrash.CrashReport.BinaryImage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BinaryImage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.baseAddress) && !(message.baseAddress && $util.isInteger(message.baseAddress.low) && $util.isInteger(message.baseAddress.high)))
                    return "baseAddress: integer|Long expected";
                if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                    return "size: integer|Long expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!(message.uuid && typeof message.uuid.length === "number" || $util.isString(message.uuid)))
                        return "uuid: buffer expected";
                if (message.codeType != null && message.hasOwnProperty("codeType")) {
                    var error = $root.plcrash.CrashReport.Processor.verify(message.codeType);
                    if (error)
                        return "codeType." + error;
                }
                return null;
            };

            /**
             * Creates a BinaryImage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof plcrash.CrashReport.BinaryImage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {plcrash.CrashReport.BinaryImage} BinaryImage
             */
            BinaryImage.fromObject = function fromObject(object) {
                if (object instanceof $root.plcrash.CrashReport.BinaryImage)
                    return object;
                var message = new $root.plcrash.CrashReport.BinaryImage();
                if (object.baseAddress != null)
                    if ($util.Long)
                        (message.baseAddress = $util.Long.fromValue(object.baseAddress)).unsigned = true;
                    else if (typeof object.baseAddress === "string")
                        message.baseAddress = parseInt(object.baseAddress, 10);
                    else if (typeof object.baseAddress === "number")
                        message.baseAddress = object.baseAddress;
                    else if (typeof object.baseAddress === "object")
                        message.baseAddress = new $util.LongBits(object.baseAddress.low >>> 0, object.baseAddress.high >>> 0).toNumber(true);
                if (object.size != null)
                    if ($util.Long)
                        (message.size = $util.Long.fromValue(object.size)).unsigned = true;
                    else if (typeof object.size === "string")
                        message.size = parseInt(object.size, 10);
                    else if (typeof object.size === "number")
                        message.size = object.size;
                    else if (typeof object.size === "object")
                        message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.uuid != null)
                    if (typeof object.uuid === "string")
                        $util.base64.decode(object.uuid, message.uuid = $util.newBuffer($util.base64.length(object.uuid)), 0);
                    else if (object.uuid.length)
                        message.uuid = object.uuid;
                if (object.codeType != null) {
                    if (typeof object.codeType !== "object")
                        throw TypeError(".plcrash.CrashReport.BinaryImage.codeType: object expected");
                    message.codeType = $root.plcrash.CrashReport.Processor.fromObject(object.codeType);
                }
                return message;
            };

            /**
             * Creates a plain object from a BinaryImage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof plcrash.CrashReport.BinaryImage
             * @static
             * @param {plcrash.CrashReport.BinaryImage} message BinaryImage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BinaryImage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.baseAddress = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.baseAddress = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.size = options.longs === String ? "0" : 0;
                    object.name = "";
                    if (options.bytes === String)
                        object.uuid = "";
                    else {
                        object.uuid = [];
                        if (options.bytes !== Array)
                            object.uuid = $util.newBuffer(object.uuid);
                    }
                    object.codeType = null;
                }
                if (message.baseAddress != null && message.hasOwnProperty("baseAddress"))
                    if (typeof message.baseAddress === "number")
                        object.baseAddress = options.longs === String ? String(message.baseAddress) : message.baseAddress;
                    else
                        object.baseAddress = options.longs === String ? $util.Long.prototype.toString.call(message.baseAddress) : options.longs === Number ? new $util.LongBits(message.baseAddress.low >>> 0, message.baseAddress.high >>> 0).toNumber(true) : message.baseAddress;
                if (message.size != null && message.hasOwnProperty("size"))
                    if (typeof message.size === "number")
                        object.size = options.longs === String ? String(message.size) : message.size;
                    else
                        object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = options.bytes === String ? $util.base64.encode(message.uuid, 0, message.uuid.length) : options.bytes === Array ? Array.prototype.slice.call(message.uuid) : message.uuid;
                if (message.codeType != null && message.hasOwnProperty("codeType"))
                    object.codeType = $root.plcrash.CrashReport.Processor.toObject(message.codeType, options);
                return object;
            };

            /**
             * Converts this BinaryImage to JSON.
             * @function toJSON
             * @memberof plcrash.CrashReport.BinaryImage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BinaryImage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BinaryImage;
        })();

        CrashReport.Exception = (function() {

            /**
             * Properties of an Exception.
             * @memberof plcrash.CrashReport
             * @interface IException
             * @property {string} name Exception name
             * @property {string} reason Exception reason
             * @property {Array.<plcrash.CrashReport.Thread.IStackFrame>|null} [frames] Exception frames
             */

            /**
             * Constructs a new Exception.
             * @memberof plcrash.CrashReport
             * @classdesc Represents an Exception.
             * @implements IException
             * @constructor
             * @param {plcrash.CrashReport.IException=} [properties] Properties to set
             */
            function Exception(properties) {
                this.frames = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Exception name.
             * @member {string} name
             * @memberof plcrash.CrashReport.Exception
             * @instance
             */
            Exception.prototype.name = "";

            /**
             * Exception reason.
             * @member {string} reason
             * @memberof plcrash.CrashReport.Exception
             * @instance
             */
            Exception.prototype.reason = "";

            /**
             * Exception frames.
             * @member {Array.<plcrash.CrashReport.Thread.IStackFrame>} frames
             * @memberof plcrash.CrashReport.Exception
             * @instance
             */
            Exception.prototype.frames = $util.emptyArray;

            /**
             * Creates a new Exception instance using the specified properties.
             * @function create
             * @memberof plcrash.CrashReport.Exception
             * @static
             * @param {plcrash.CrashReport.IException=} [properties] Properties to set
             * @returns {plcrash.CrashReport.Exception} Exception instance
             */
            Exception.create = function create(properties) {
                return new Exception(properties);
            };

            /**
             * Encodes the specified Exception message. Does not implicitly {@link plcrash.CrashReport.Exception.verify|verify} messages.
             * @function encode
             * @memberof plcrash.CrashReport.Exception
             * @static
             * @param {plcrash.CrashReport.IException} message Exception message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Exception.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                if (message.frames != null && message.frames.length)
                    for (var i = 0; i < message.frames.length; ++i)
                        $root.plcrash.CrashReport.Thread.StackFrame.encode(message.frames[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Exception message, length delimited. Does not implicitly {@link plcrash.CrashReport.Exception.verify|verify} messages.
             * @function encodeDelimited
             * @memberof plcrash.CrashReport.Exception
             * @static
             * @param {plcrash.CrashReport.IException} message Exception message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Exception.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Exception message from the specified reader or buffer.
             * @function decode
             * @memberof plcrash.CrashReport.Exception
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {plcrash.CrashReport.Exception} Exception
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Exception.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.Exception();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.reason = reader.string();
                        break;
                    case 3:
                        if (!(message.frames && message.frames.length))
                            message.frames = [];
                        message.frames.push($root.plcrash.CrashReport.Thread.StackFrame.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("reason"))
                    throw $util.ProtocolError("missing required 'reason'", { instance: message });
                return message;
            };

            /**
             * Decodes an Exception message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof plcrash.CrashReport.Exception
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {plcrash.CrashReport.Exception} Exception
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Exception.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Exception message.
             * @function verify
             * @memberof plcrash.CrashReport.Exception
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Exception.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (!$util.isString(message.reason))
                    return "reason: string expected";
                if (message.frames != null && message.hasOwnProperty("frames")) {
                    if (!Array.isArray(message.frames))
                        return "frames: array expected";
                    for (var i = 0; i < message.frames.length; ++i) {
                        var error = $root.plcrash.CrashReport.Thread.StackFrame.verify(message.frames[i]);
                        if (error)
                            return "frames." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Exception message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof plcrash.CrashReport.Exception
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {plcrash.CrashReport.Exception} Exception
             */
            Exception.fromObject = function fromObject(object) {
                if (object instanceof $root.plcrash.CrashReport.Exception)
                    return object;
                var message = new $root.plcrash.CrashReport.Exception();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.reason != null)
                    message.reason = String(object.reason);
                if (object.frames) {
                    if (!Array.isArray(object.frames))
                        throw TypeError(".plcrash.CrashReport.Exception.frames: array expected");
                    message.frames = [];
                    for (var i = 0; i < object.frames.length; ++i) {
                        if (typeof object.frames[i] !== "object")
                            throw TypeError(".plcrash.CrashReport.Exception.frames: object expected");
                        message.frames[i] = $root.plcrash.CrashReport.Thread.StackFrame.fromObject(object.frames[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Exception message. Also converts values to other types if specified.
             * @function toObject
             * @memberof plcrash.CrashReport.Exception
             * @static
             * @param {plcrash.CrashReport.Exception} message Exception
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Exception.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.frames = [];
                if (options.defaults) {
                    object.name = "";
                    object.reason = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                if (message.frames && message.frames.length) {
                    object.frames = [];
                    for (var j = 0; j < message.frames.length; ++j)
                        object.frames[j] = $root.plcrash.CrashReport.Thread.StackFrame.toObject(message.frames[j], options);
                }
                return object;
            };

            /**
             * Converts this Exception to JSON.
             * @function toJSON
             * @memberof plcrash.CrashReport.Exception
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Exception.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Exception;
        })();

        CrashReport.Signal = (function() {

            /**
             * Properties of a Signal.
             * @memberof plcrash.CrashReport
             * @interface ISignal
             * @property {string} name Signal name
             * @property {string} code Signal code
             * @property {number|Long} address Signal address
             * @property {plcrash.CrashReport.Signal.IMachException|null} [machException] Signal machException
             */

            /**
             * Constructs a new Signal.
             * @memberof plcrash.CrashReport
             * @classdesc Represents a Signal.
             * @implements ISignal
             * @constructor
             * @param {plcrash.CrashReport.ISignal=} [properties] Properties to set
             */
            function Signal(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Signal name
             * @member {string} name
             * @memberof plcrash.CrashReport.Signal
             * @instance
             */
            Signal.prototype.name = "";

            /**
             * Signal code.
             * @member {string} code
             * @memberof plcrash.CrashReport.Signal
             * @instance
             */
            Signal.prototype.code = "";

            /**
             * Signal address.
             * @member {number|Long} address
             * @memberof plcrash.CrashReport.Signal
             * @instance
             */
            Signal.prototype.address = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Signal machException.
             * @member {plcrash.CrashReport.Signal.IMachException|null|undefined} machException
             * @memberof plcrash.CrashReport.Signal
             * @instance
             */
            Signal.prototype.machException = null;

            /**
             * Creates a new Signal instance using the specified properties.
             * @function create
             * @memberof plcrash.CrashReport.Signal
             * @static
             * @param {plcrash.CrashReport.ISignal=} [properties] Properties to set
             * @returns {plcrash.CrashReport.Signal} Signal instance
             */
            Signal.create = function create(properties) {
                return new Signal(properties);
            };

            /**
             * Encodes the specified Signal message. Does not implicitly {@link plcrash.CrashReport.Signal.verify|verify} messages.
             * @function encode
             * @memberof plcrash.CrashReport.Signal
             * @static
             * @param {plcrash.CrashReport.ISignal} message Signal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Signal.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.address);
                if (message.machException != null && message.hasOwnProperty("machException"))
                    $root.plcrash.CrashReport.Signal.MachException.encode(message.machException, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Signal message, length delimited. Does not implicitly {@link plcrash.CrashReport.Signal.verify|verify} messages.
             * @function encodeDelimited
             * @memberof plcrash.CrashReport.Signal
             * @static
             * @param {plcrash.CrashReport.ISignal} message Signal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Signal.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Signal message from the specified reader or buffer.
             * @function decode
             * @memberof plcrash.CrashReport.Signal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {plcrash.CrashReport.Signal} Signal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Signal.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.Signal();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.code = reader.string();
                        break;
                    case 3:
                        message.address = reader.uint64();
                        break;
                    case 4:
                        message.machException = $root.plcrash.CrashReport.Signal.MachException.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("code"))
                    throw $util.ProtocolError("missing required 'code'", { instance: message });
                if (!message.hasOwnProperty("address"))
                    throw $util.ProtocolError("missing required 'address'", { instance: message });
                return message;
            };

            /**
             * Decodes a Signal message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof plcrash.CrashReport.Signal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {plcrash.CrashReport.Signal} Signal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Signal.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Signal message.
             * @function verify
             * @memberof plcrash.CrashReport.Signal
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Signal.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (!$util.isString(message.code))
                    return "code: string expected";
                if (!$util.isInteger(message.address) && !(message.address && $util.isInteger(message.address.low) && $util.isInteger(message.address.high)))
                    return "address: integer|Long expected";
                if (message.machException != null && message.hasOwnProperty("machException")) {
                    var error = $root.plcrash.CrashReport.Signal.MachException.verify(message.machException);
                    if (error)
                        return "machException." + error;
                }
                return null;
            };

            /**
             * Creates a Signal message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof plcrash.CrashReport.Signal
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {plcrash.CrashReport.Signal} Signal
             */
            Signal.fromObject = function fromObject(object) {
                if (object instanceof $root.plcrash.CrashReport.Signal)
                    return object;
                var message = new $root.plcrash.CrashReport.Signal();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.code != null)
                    message.code = String(object.code);
                if (object.address != null)
                    if ($util.Long)
                        (message.address = $util.Long.fromValue(object.address)).unsigned = true;
                    else if (typeof object.address === "string")
                        message.address = parseInt(object.address, 10);
                    else if (typeof object.address === "number")
                        message.address = object.address;
                    else if (typeof object.address === "object")
                        message.address = new $util.LongBits(object.address.low >>> 0, object.address.high >>> 0).toNumber(true);
                if (object.machException != null) {
                    if (typeof object.machException !== "object")
                        throw TypeError(".plcrash.CrashReport.Signal.machException: object expected");
                    message.machException = $root.plcrash.CrashReport.Signal.MachException.fromObject(object.machException);
                }
                return message;
            };

            /**
             * Creates a plain object from a Signal message. Also converts values to other types if specified.
             * @function toObject
             * @memberof plcrash.CrashReport.Signal
             * @static
             * @param {plcrash.CrashReport.Signal} message Signal
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Signal.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.code = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.address = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.address = options.longs === String ? "0" : 0;
                    object.machException = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.address != null && message.hasOwnProperty("address"))
                    if (typeof message.address === "number")
                        object.address = options.longs === String ? String(message.address) : message.address;
                    else
                        object.address = options.longs === String ? $util.Long.prototype.toString.call(message.address) : options.longs === Number ? new $util.LongBits(message.address.low >>> 0, message.address.high >>> 0).toNumber(true) : message.address;
                if (message.machException != null && message.hasOwnProperty("machException"))
                    object.machException = $root.plcrash.CrashReport.Signal.MachException.toObject(message.machException, options);
                return object;
            };

            /**
             * Converts this Signal to JSON.
             * @function toJSON
             * @memberof plcrash.CrashReport.Signal
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Signal.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Signal.MachException = (function() {

                /**
                 * Properties of a MachException.
                 * @memberof plcrash.CrashReport.Signal
                 * @interface IMachException
                 * @property {number|Long} type MachException type
                 * @property {Array.<number|Long>|null} [codes] MachException codes
                 */

                /**
                 * Constructs a new MachException.
                 * @memberof plcrash.CrashReport.Signal
                 * @classdesc Represents a MachException.
                 * @implements IMachException
                 * @constructor
                 * @param {plcrash.CrashReport.Signal.IMachException=} [properties] Properties to set
                 */
                function MachException(properties) {
                    this.codes = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MachException type.
                 * @member {number|Long} type
                 * @memberof plcrash.CrashReport.Signal.MachException
                 * @instance
                 */
                MachException.prototype.type = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * MachException codes.
                 * @member {Array.<number|Long>} codes
                 * @memberof plcrash.CrashReport.Signal.MachException
                 * @instance
                 */
                MachException.prototype.codes = $util.emptyArray;

                /**
                 * Creates a new MachException instance using the specified properties.
                 * @function create
                 * @memberof plcrash.CrashReport.Signal.MachException
                 * @static
                 * @param {plcrash.CrashReport.Signal.IMachException=} [properties] Properties to set
                 * @returns {plcrash.CrashReport.Signal.MachException} MachException instance
                 */
                MachException.create = function create(properties) {
                    return new MachException(properties);
                };

                /**
                 * Encodes the specified MachException message. Does not implicitly {@link plcrash.CrashReport.Signal.MachException.verify|verify} messages.
                 * @function encode
                 * @memberof plcrash.CrashReport.Signal.MachException
                 * @static
                 * @param {plcrash.CrashReport.Signal.IMachException} message MachException message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MachException.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.type);
                    if (message.codes != null && message.codes.length)
                        for (var i = 0; i < message.codes.length; ++i)
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.codes[i]);
                    return writer;
                };

                /**
                 * Encodes the specified MachException message, length delimited. Does not implicitly {@link plcrash.CrashReport.Signal.MachException.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof plcrash.CrashReport.Signal.MachException
                 * @static
                 * @param {plcrash.CrashReport.Signal.IMachException} message MachException message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MachException.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MachException message from the specified reader or buffer.
                 * @function decode
                 * @memberof plcrash.CrashReport.Signal.MachException
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {plcrash.CrashReport.Signal.MachException} MachException
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MachException.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.Signal.MachException();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.uint64();
                            break;
                        case 2:
                            if (!(message.codes && message.codes.length))
                                message.codes = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.codes.push(reader.uint64());
                            } else
                                message.codes.push(reader.uint64());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("type"))
                        throw $util.ProtocolError("missing required 'type'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a MachException message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof plcrash.CrashReport.Signal.MachException
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {plcrash.CrashReport.Signal.MachException} MachException
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MachException.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MachException message.
                 * @function verify
                 * @memberof plcrash.CrashReport.Signal.MachException
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MachException.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.type) && !(message.type && $util.isInteger(message.type.low) && $util.isInteger(message.type.high)))
                        return "type: integer|Long expected";
                    if (message.codes != null && message.hasOwnProperty("codes")) {
                        if (!Array.isArray(message.codes))
                            return "codes: array expected";
                        for (var i = 0; i < message.codes.length; ++i)
                            if (!$util.isInteger(message.codes[i]) && !(message.codes[i] && $util.isInteger(message.codes[i].low) && $util.isInteger(message.codes[i].high)))
                                return "codes: integer|Long[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a MachException message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof plcrash.CrashReport.Signal.MachException
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {plcrash.CrashReport.Signal.MachException} MachException
                 */
                MachException.fromObject = function fromObject(object) {
                    if (object instanceof $root.plcrash.CrashReport.Signal.MachException)
                        return object;
                    var message = new $root.plcrash.CrashReport.Signal.MachException();
                    if (object.type != null)
                        if ($util.Long)
                            (message.type = $util.Long.fromValue(object.type)).unsigned = true;
                        else if (typeof object.type === "string")
                            message.type = parseInt(object.type, 10);
                        else if (typeof object.type === "number")
                            message.type = object.type;
                        else if (typeof object.type === "object")
                            message.type = new $util.LongBits(object.type.low >>> 0, object.type.high >>> 0).toNumber(true);
                    if (object.codes) {
                        if (!Array.isArray(object.codes))
                            throw TypeError(".plcrash.CrashReport.Signal.MachException.codes: array expected");
                        message.codes = [];
                        for (var i = 0; i < object.codes.length; ++i)
                            if ($util.Long)
                                (message.codes[i] = $util.Long.fromValue(object.codes[i])).unsigned = true;
                            else if (typeof object.codes[i] === "string")
                                message.codes[i] = parseInt(object.codes[i], 10);
                            else if (typeof object.codes[i] === "number")
                                message.codes[i] = object.codes[i];
                            else if (typeof object.codes[i] === "object")
                                message.codes[i] = new $util.LongBits(object.codes[i].low >>> 0, object.codes[i].high >>> 0).toNumber(true);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MachException message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof plcrash.CrashReport.Signal.MachException
                 * @static
                 * @param {plcrash.CrashReport.Signal.MachException} message MachException
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MachException.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.codes = [];
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.type = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.type = options.longs === String ? "0" : 0;
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (typeof message.type === "number")
                            object.type = options.longs === String ? String(message.type) : message.type;
                        else
                            object.type = options.longs === String ? $util.Long.prototype.toString.call(message.type) : options.longs === Number ? new $util.LongBits(message.type.low >>> 0, message.type.high >>> 0).toNumber(true) : message.type;
                    if (message.codes && message.codes.length) {
                        object.codes = [];
                        for (var j = 0; j < message.codes.length; ++j)
                            if (typeof message.codes[j] === "number")
                                object.codes[j] = options.longs === String ? String(message.codes[j]) : message.codes[j];
                            else
                                object.codes[j] = options.longs === String ? $util.Long.prototype.toString.call(message.codes[j]) : options.longs === Number ? new $util.LongBits(message.codes[j].low >>> 0, message.codes[j].high >>> 0).toNumber(true) : message.codes[j];
                    }
                    return object;
                };

                /**
                 * Converts this MachException to JSON.
                 * @function toJSON
                 * @memberof plcrash.CrashReport.Signal.MachException
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MachException.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MachException;
            })();

            return Signal;
        })();

        CrashReport.ProcessInfo = (function() {

            /**
             * Properties of a ProcessInfo.
             * @memberof plcrash.CrashReport
             * @interface IProcessInfo
             * @property {string|null} [processName] ProcessInfo processName
             * @property {number} processId ProcessInfo processId
             * @property {string|null} [processPath] ProcessInfo processPath
             * @property {string|null} [parentProcessName] ProcessInfo parentProcessName
             * @property {number} parentProcessId ProcessInfo parentProcessId
             * @property {boolean} native If false, the process is being run via process-level CPU emulation (such as Rosetta).
             * @property {number|Long|null} [startTime] The start time of the process (as seconds since UNIX epoch). The field may be
             * ommitted if the start time can not be determined.
             */

            /**
             * Constructs a new ProcessInfo.
             * @memberof plcrash.CrashReport
             * @classdesc Represents a ProcessInfo.
             * @implements IProcessInfo
             * @constructor
             * @param {plcrash.CrashReport.IProcessInfo=} [properties] Properties to set
             */
            function ProcessInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProcessInfo processName.
             * @member {string} processName
             * @memberof plcrash.CrashReport.ProcessInfo
             * @instance
             */
            ProcessInfo.prototype.processName = "";

            /**
             * ProcessInfo processId.
             * @member {number} processId
             * @memberof plcrash.CrashReport.ProcessInfo
             * @instance
             */
            ProcessInfo.prototype.processId = 0;

            /**
             * ProcessInfo processPath.
             * @member {string} processPath
             * @memberof plcrash.CrashReport.ProcessInfo
             * @instance
             */
            ProcessInfo.prototype.processPath = "";

            /**
             * ProcessInfo parentProcessName.
             * @member {string} parentProcessName
             * @memberof plcrash.CrashReport.ProcessInfo
             * @instance
             */
            ProcessInfo.prototype.parentProcessName = "";

            /**
             * ProcessInfo parentProcessId.
             * @member {number} parentProcessId
             * @memberof plcrash.CrashReport.ProcessInfo
             * @instance
             */
            ProcessInfo.prototype.parentProcessId = 0;

            /**
             * If false, the process is being run via process-level CPU emulation (such as Rosetta).
             * @member {boolean} native
             * @memberof plcrash.CrashReport.ProcessInfo
             * @instance
             */
            ProcessInfo.prototype.native = false;

            /**
             * The start time of the process (as seconds since UNIX epoch). The field may be
             * ommitted if the start time can not be determined.
             * @member {number|Long} startTime
             * @memberof plcrash.CrashReport.ProcessInfo
             * @instance
             */
            ProcessInfo.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new ProcessInfo instance using the specified properties.
             * @function create
             * @memberof plcrash.CrashReport.ProcessInfo
             * @static
             * @param {plcrash.CrashReport.IProcessInfo=} [properties] Properties to set
             * @returns {plcrash.CrashReport.ProcessInfo} ProcessInfo instance
             */
            ProcessInfo.create = function create(properties) {
                return new ProcessInfo(properties);
            };

            /**
             * Encodes the specified ProcessInfo message. Does not implicitly {@link plcrash.CrashReport.ProcessInfo.verify|verify} messages.
             * @function encode
             * @memberof plcrash.CrashReport.ProcessInfo
             * @static
             * @param {plcrash.CrashReport.IProcessInfo} message ProcessInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.processName != null && message.hasOwnProperty("processName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.processName);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.processId);
                if (message.processPath != null && message.hasOwnProperty("processPath"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.processPath);
                if (message.parentProcessName != null && message.hasOwnProperty("parentProcessName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.parentProcessName);
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.parentProcessId);
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.native);
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.startTime);
                return writer;
            };

            /**
             * Encodes the specified ProcessInfo message, length delimited. Does not implicitly {@link plcrash.CrashReport.ProcessInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof plcrash.CrashReport.ProcessInfo
             * @static
             * @param {plcrash.CrashReport.IProcessInfo} message ProcessInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProcessInfo message from the specified reader or buffer.
             * @function decode
             * @memberof plcrash.CrashReport.ProcessInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {plcrash.CrashReport.ProcessInfo} ProcessInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.ProcessInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.processName = reader.string();
                        break;
                    case 2:
                        message.processId = reader.uint32();
                        break;
                    case 3:
                        message.processPath = reader.string();
                        break;
                    case 4:
                        message.parentProcessName = reader.string();
                        break;
                    case 5:
                        message.parentProcessId = reader.uint32();
                        break;
                    case 6:
                        message.native = reader.bool();
                        break;
                    case 7:
                        message.startTime = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("processId"))
                    throw $util.ProtocolError("missing required 'processId'", { instance: message });
                if (!message.hasOwnProperty("parentProcessId"))
                    throw $util.ProtocolError("missing required 'parentProcessId'", { instance: message });
                if (!message.hasOwnProperty("native"))
                    throw $util.ProtocolError("missing required 'native'", { instance: message });
                return message;
            };

            /**
             * Decodes a ProcessInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof plcrash.CrashReport.ProcessInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {plcrash.CrashReport.ProcessInfo} ProcessInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProcessInfo message.
             * @function verify
             * @memberof plcrash.CrashReport.ProcessInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProcessInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.processName != null && message.hasOwnProperty("processName"))
                    if (!$util.isString(message.processName))
                        return "processName: string expected";
                if (!$util.isInteger(message.processId))
                    return "processId: integer expected";
                if (message.processPath != null && message.hasOwnProperty("processPath"))
                    if (!$util.isString(message.processPath))
                        return "processPath: string expected";
                if (message.parentProcessName != null && message.hasOwnProperty("parentProcessName"))
                    if (!$util.isString(message.parentProcessName))
                        return "parentProcessName: string expected";
                if (!$util.isInteger(message.parentProcessId))
                    return "parentProcessId: integer expected";
                if (typeof message.native !== "boolean")
                    return "native: boolean expected";
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                        return "startTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a ProcessInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof plcrash.CrashReport.ProcessInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {plcrash.CrashReport.ProcessInfo} ProcessInfo
             */
            ProcessInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.plcrash.CrashReport.ProcessInfo)
                    return object;
                var message = new $root.plcrash.CrashReport.ProcessInfo();
                if (object.processName != null)
                    message.processName = String(object.processName);
                if (object.processId != null)
                    message.processId = object.processId >>> 0;
                if (object.processPath != null)
                    message.processPath = String(object.processPath);
                if (object.parentProcessName != null)
                    message.parentProcessName = String(object.parentProcessName);
                if (object.parentProcessId != null)
                    message.parentProcessId = object.parentProcessId >>> 0;
                if (object.native != null)
                    message.native = Boolean(object.native);
                if (object.startTime != null)
                    if ($util.Long)
                        (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = true;
                    else if (typeof object.startTime === "string")
                        message.startTime = parseInt(object.startTime, 10);
                    else if (typeof object.startTime === "number")
                        message.startTime = object.startTime;
                    else if (typeof object.startTime === "object")
                        message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a ProcessInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof plcrash.CrashReport.ProcessInfo
             * @static
             * @param {plcrash.CrashReport.ProcessInfo} message ProcessInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProcessInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.processName = "";
                    object.processId = 0;
                    object.processPath = "";
                    object.parentProcessName = "";
                    object.parentProcessId = 0;
                    object.native = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.startTime = options.longs === String ? "0" : 0;
                }
                if (message.processName != null && message.hasOwnProperty("processName"))
                    object.processName = message.processName;
                if (message.processId != null && message.hasOwnProperty("processId"))
                    object.processId = message.processId;
                if (message.processPath != null && message.hasOwnProperty("processPath"))
                    object.processPath = message.processPath;
                if (message.parentProcessName != null && message.hasOwnProperty("parentProcessName"))
                    object.parentProcessName = message.parentProcessName;
                if (message.parentProcessId != null && message.hasOwnProperty("parentProcessId"))
                    object.parentProcessId = message.parentProcessId;
                if (message.native != null && message.hasOwnProperty("native"))
                    object.native = message.native;
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    if (typeof message.startTime === "number")
                        object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                    else
                        object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber(true) : message.startTime;
                return object;
            };

            /**
             * Converts this ProcessInfo to JSON.
             * @function toJSON
             * @memberof plcrash.CrashReport.ProcessInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProcessInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ProcessInfo;
        })();

        CrashReport.MachineInfo = (function() {

            /**
             * Properties of a MachineInfo.
             * @memberof plcrash.CrashReport
             * @interface IMachineInfo
             * @property {string|null} [model] MachineInfo model
             * @property {plcrash.CrashReport.IProcessor} processor MachineInfo processor
             * @property {number} processorCount MachineInfo processorCount
             * @property {number} logicalProcessorCount MachineInfo logicalProcessorCount
             */

            /**
             * Constructs a new MachineInfo.
             * @memberof plcrash.CrashReport
             * @classdesc Represents a MachineInfo.
             * @implements IMachineInfo
             * @constructor
             * @param {plcrash.CrashReport.IMachineInfo=} [properties] Properties to set
             */
            function MachineInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MachineInfo model.
             * @member {string} model
             * @memberof plcrash.CrashReport.MachineInfo
             * @instance
             */
            MachineInfo.prototype.model = "";

            /**
             * MachineInfo processor.
             * @member {plcrash.CrashReport.IProcessor} processor
             * @memberof plcrash.CrashReport.MachineInfo
             * @instance
             */
            MachineInfo.prototype.processor = null;

            /**
             * MachineInfo processorCount.
             * @member {number} processorCount
             * @memberof plcrash.CrashReport.MachineInfo
             * @instance
             */
            MachineInfo.prototype.processorCount = 0;

            /**
             * MachineInfo logicalProcessorCount.
             * @member {number} logicalProcessorCount
             * @memberof plcrash.CrashReport.MachineInfo
             * @instance
             */
            MachineInfo.prototype.logicalProcessorCount = 0;

            /**
             * Creates a new MachineInfo instance using the specified properties.
             * @function create
             * @memberof plcrash.CrashReport.MachineInfo
             * @static
             * @param {plcrash.CrashReport.IMachineInfo=} [properties] Properties to set
             * @returns {plcrash.CrashReport.MachineInfo} MachineInfo instance
             */
            MachineInfo.create = function create(properties) {
                return new MachineInfo(properties);
            };

            /**
             * Encodes the specified MachineInfo message. Does not implicitly {@link plcrash.CrashReport.MachineInfo.verify|verify} messages.
             * @function encode
             * @memberof plcrash.CrashReport.MachineInfo
             * @static
             * @param {plcrash.CrashReport.IMachineInfo} message MachineInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MachineInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.model != null && message.hasOwnProperty("model"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.model);
                $root.plcrash.CrashReport.Processor.encode(message.processor, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.processorCount);
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.logicalProcessorCount);
                return writer;
            };

            /**
             * Encodes the specified MachineInfo message, length delimited. Does not implicitly {@link plcrash.CrashReport.MachineInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof plcrash.CrashReport.MachineInfo
             * @static
             * @param {plcrash.CrashReport.IMachineInfo} message MachineInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MachineInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MachineInfo message from the specified reader or buffer.
             * @function decode
             * @memberof plcrash.CrashReport.MachineInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {plcrash.CrashReport.MachineInfo} MachineInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MachineInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.MachineInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.model = reader.string();
                        break;
                    case 2:
                        message.processor = $root.plcrash.CrashReport.Processor.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.processorCount = reader.uint32();
                        break;
                    case 4:
                        message.logicalProcessorCount = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("processor"))
                    throw $util.ProtocolError("missing required 'processor'", { instance: message });
                if (!message.hasOwnProperty("processorCount"))
                    throw $util.ProtocolError("missing required 'processorCount'", { instance: message });
                if (!message.hasOwnProperty("logicalProcessorCount"))
                    throw $util.ProtocolError("missing required 'logicalProcessorCount'", { instance: message });
                return message;
            };

            /**
             * Decodes a MachineInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof plcrash.CrashReport.MachineInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {plcrash.CrashReport.MachineInfo} MachineInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MachineInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MachineInfo message.
             * @function verify
             * @memberof plcrash.CrashReport.MachineInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MachineInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.model != null && message.hasOwnProperty("model"))
                    if (!$util.isString(message.model))
                        return "model: string expected";
                {
                    var error = $root.plcrash.CrashReport.Processor.verify(message.processor);
                    if (error)
                        return "processor." + error;
                }
                if (!$util.isInteger(message.processorCount))
                    return "processorCount: integer expected";
                if (!$util.isInteger(message.logicalProcessorCount))
                    return "logicalProcessorCount: integer expected";
                return null;
            };

            /**
             * Creates a MachineInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof plcrash.CrashReport.MachineInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {plcrash.CrashReport.MachineInfo} MachineInfo
             */
            MachineInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.plcrash.CrashReport.MachineInfo)
                    return object;
                var message = new $root.plcrash.CrashReport.MachineInfo();
                if (object.model != null)
                    message.model = String(object.model);
                if (object.processor != null) {
                    if (typeof object.processor !== "object")
                        throw TypeError(".plcrash.CrashReport.MachineInfo.processor: object expected");
                    message.processor = $root.plcrash.CrashReport.Processor.fromObject(object.processor);
                }
                if (object.processorCount != null)
                    message.processorCount = object.processorCount >>> 0;
                if (object.logicalProcessorCount != null)
                    message.logicalProcessorCount = object.logicalProcessorCount >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a MachineInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof plcrash.CrashReport.MachineInfo
             * @static
             * @param {plcrash.CrashReport.MachineInfo} message MachineInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MachineInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.model = "";
                    object.processor = null;
                    object.processorCount = 0;
                    object.logicalProcessorCount = 0;
                }
                if (message.model != null && message.hasOwnProperty("model"))
                    object.model = message.model;
                if (message.processor != null && message.hasOwnProperty("processor"))
                    object.processor = $root.plcrash.CrashReport.Processor.toObject(message.processor, options);
                if (message.processorCount != null && message.hasOwnProperty("processorCount"))
                    object.processorCount = message.processorCount;
                if (message.logicalProcessorCount != null && message.hasOwnProperty("logicalProcessorCount"))
                    object.logicalProcessorCount = message.logicalProcessorCount;
                return object;
            };

            /**
             * Converts this MachineInfo to JSON.
             * @function toJSON
             * @memberof plcrash.CrashReport.MachineInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MachineInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MachineInfo;
        })();

        CrashReport.ReportInfo = (function() {

            /**
             * Properties of a ReportInfo.
             * @memberof plcrash.CrashReport
             * @interface IReportInfo
             * @property {boolean} userRequested If true, this report was generated on request, and no crash occured.
             * @property {Uint8Array|null} [uuid] A client-generated 16 byte OSF standard UUID for this report. May be used to filter duplicate reports submitted
             * by a single client.
             */

            /**
             * Constructs a new ReportInfo.
             * @memberof plcrash.CrashReport
             * @classdesc Represents a ReportInfo.
             * @implements IReportInfo
             * @constructor
             * @param {plcrash.CrashReport.IReportInfo=} [properties] Properties to set
             */
            function ReportInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * If true, this report was generated on request, and no crash occured.
             * @member {boolean} userRequested
             * @memberof plcrash.CrashReport.ReportInfo
             * @instance
             */
            ReportInfo.prototype.userRequested = false;

            /**
             * A client-generated 16 byte OSF standard UUID for this report. May be used to filter duplicate reports submitted
             * by a single client.
             * @member {Uint8Array} uuid
             * @memberof plcrash.CrashReport.ReportInfo
             * @instance
             */
            ReportInfo.prototype.uuid = $util.newBuffer([]);

            /**
             * Creates a new ReportInfo instance using the specified properties.
             * @function create
             * @memberof plcrash.CrashReport.ReportInfo
             * @static
             * @param {plcrash.CrashReport.IReportInfo=} [properties] Properties to set
             * @returns {plcrash.CrashReport.ReportInfo} ReportInfo instance
             */
            ReportInfo.create = function create(properties) {
                return new ReportInfo(properties);
            };

            /**
             * Encodes the specified ReportInfo message. Does not implicitly {@link plcrash.CrashReport.ReportInfo.verify|verify} messages.
             * @function encode
             * @memberof plcrash.CrashReport.ReportInfo
             * @static
             * @param {plcrash.CrashReport.IReportInfo} message ReportInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReportInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.userRequested);
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.uuid);
                return writer;
            };

            /**
             * Encodes the specified ReportInfo message, length delimited. Does not implicitly {@link plcrash.CrashReport.ReportInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof plcrash.CrashReport.ReportInfo
             * @static
             * @param {plcrash.CrashReport.IReportInfo} message ReportInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReportInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReportInfo message from the specified reader or buffer.
             * @function decode
             * @memberof plcrash.CrashReport.ReportInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {plcrash.CrashReport.ReportInfo} ReportInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReportInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.plcrash.CrashReport.ReportInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userRequested = reader.bool();
                        break;
                    case 2:
                        message.uuid = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("userRequested"))
                    throw $util.ProtocolError("missing required 'userRequested'", { instance: message });
                return message;
            };

            /**
             * Decodes a ReportInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof plcrash.CrashReport.ReportInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {plcrash.CrashReport.ReportInfo} ReportInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReportInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReportInfo message.
             * @function verify
             * @memberof plcrash.CrashReport.ReportInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReportInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.userRequested !== "boolean")
                    return "userRequested: boolean expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!(message.uuid && typeof message.uuid.length === "number" || $util.isString(message.uuid)))
                        return "uuid: buffer expected";
                return null;
            };

            /**
             * Creates a ReportInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof plcrash.CrashReport.ReportInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {plcrash.CrashReport.ReportInfo} ReportInfo
             */
            ReportInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.plcrash.CrashReport.ReportInfo)
                    return object;
                var message = new $root.plcrash.CrashReport.ReportInfo();
                if (object.userRequested != null)
                    message.userRequested = Boolean(object.userRequested);
                if (object.uuid != null)
                    if (typeof object.uuid === "string")
                        $util.base64.decode(object.uuid, message.uuid = $util.newBuffer($util.base64.length(object.uuid)), 0);
                    else if (object.uuid.length)
                        message.uuid = object.uuid;
                return message;
            };

            /**
             * Creates a plain object from a ReportInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof plcrash.CrashReport.ReportInfo
             * @static
             * @param {plcrash.CrashReport.ReportInfo} message ReportInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReportInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userRequested = false;
                    if (options.bytes === String)
                        object.uuid = "";
                    else {
                        object.uuid = [];
                        if (options.bytes !== Array)
                            object.uuid = $util.newBuffer(object.uuid);
                    }
                }
                if (message.userRequested != null && message.hasOwnProperty("userRequested"))
                    object.userRequested = message.userRequested;
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = options.bytes === String ? $util.base64.encode(message.uuid, 0, message.uuid.length) : options.bytes === Array ? Array.prototype.slice.call(message.uuid) : message.uuid;
                return object;
            };

            /**
             * Converts this ReportInfo to JSON.
             * @function toJSON
             * @memberof plcrash.CrashReport.ReportInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReportInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReportInfo;
        })();

        return CrashReport;
    })();

    return plcrash;
})();

module.exports = $root;
