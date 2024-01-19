var ChunkStepTypeEnum;
(function (ChunkStepTypeEnum) {
    ChunkStepTypeEnum["Chunk"] = "chunk";
})(ChunkStepTypeEnum || (ChunkStepTypeEnum = {}));

var chunk = function (flowName) {
    return {
        type: "chunk",
        name: flowName
    };
};
var data = chunk("srikanth");
console.log("data", data);
