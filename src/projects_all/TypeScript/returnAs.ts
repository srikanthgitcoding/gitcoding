

interface Sample {
  type : ChunkStepTypeEnum
  name : string
}



enum ChunkStepTypeEnum {
  Chunk = "chunk",
}

const chunk = (flowName: string) => {
    return {
      type: "chunk",
      name: flowName,
    } as Sample
};
const data = chunk("srikanth")

console.log("data", data)
