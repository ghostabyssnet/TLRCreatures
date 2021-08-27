import { std } from "tswow-stdlib";
import { Pos } from "tswow-stdlib/Misc/Position";
import { GameObjectName } from "../../../tswow-stdlib/datascripts/build/GameObject/GameObjectName";
import { Phase } from "../../../tswow-stdlib/datascripts/build/Spell/EffectTemplates/AuraTemplates";

let npc = std.CreatureTemplates.create(/*@1*/'TLRCreatures'/**/,/*@2*/'wrathion-quest'/**/)
    .Name.enGB.set('Wrathion')
    .Subname.enGB.set('Shade of the Past')
    .Models.addIds(27035)
    .FactionTemplate.setNeutralPassive()
    .NPCFlags.QuestGiver.mark()
    .Rank.setElite()
    .Scale.set(0.5)
    .Stats.ArmorMod.set(1)
    .Stats.DamageMod.set(1)
    .Stats.HealthMod.set(2)
    .Stats.ManaMod.set(1)
    .UnitClass.setWarrior()
    .Level.set(70,70)
    .spawn(/*@1*/'TLRCreatures'/**/,/*@2*/'wrathion-quest'/**/+'spawn',
        Pos(1, -8539.160156,-4436.950195,-212.610992,4.27)
    ).end

// let tyrande = std.CreatureTemplates.create(/*@1*/'TLRCreatures'/**/,/*@2*/'id'/**/+'-tyrande')
//    .Name.enGB.set('Tyrande Whisperwind')
//    .Models.addIds(29419)
//    .FactionTemplate.setDarnassus()
//    .NPCFlags.QuestGiver.mark()
    
// let x = std.GameObjectTemplates.create()

//let quest = std.Quests.create(/*@1*/'mod'/**/,/*@2*/'id'/**/+'-quest')
//    .SortID.set(1)
//    .MinLevel.set(1)
//    .Questgiver.addStarter(npc.ID)
//    .Questgiver.addEnder(tyrande.ID)
//    .Objectives.Scripted.enGB.set('NPC Escorted')
//    .Text.Title.enGB.set('Escort Quest')
//    .Text.Description.enGB.set('Quest Description')
//    .Text.Objective.enGB.set('Help escort the NPC')
//    .Text.Incomplete.enGB.set('Did you escort the NPC yet?')
//    .Text.Reward.enGB.set('Good job escorting the NPC')