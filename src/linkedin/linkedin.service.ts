import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LinkedInService {
  private readonly logger = new Logger(LinkedInService.name);
  private readonly token = process.env.LINKEDIN_TOKEN;
  private readonly uri = process.env.LINKEDIN_URI;

  async getUserProfile() {
    this.logger.log('Fetching user profile from LinkedIn');
    const url = this.uri + 'me';

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      this.logger.log('User profile fetched successfully');

      this.logger.log(`User ID: ${response.data.id}`);
      this.logger.log(`User Name: ${response.data.localizedFirstName} ${response.data.localizedLastName}`);
      this.logger.log(`Profile Picture: ${response.data.profilePicture['displayImage~'].elements[0].identifiers[0].identifier}`);

      return response.data;
    } catch (error) {
      this.logger.error('Error fetching user profile', error.message);
      throw error;
    }
  }
}
